import "./PostCard.css";
import { RxHeartFilled } from "react-icons/rx";
import { RxBookmarkFilled } from "react-icons/rx";
import { RxBookmark } from "react-icons/rx";
import { RxShare2 } from "react-icons/rx";
import { RxHeart } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

import { useData } from "../../Context/dataContext";
import { LikePopover } from "../Popover/LikePopover";
import { useAuth } from "../../Context/authContext";
import { EditMenu } from "../Popover/EditPopover";
import {
  bookmarkPost,
  likePost,
  removeBookmarkedPost,
  unlikePost,
} from "../../AsyncUtilities/dataAsyncHelpers";
import { timeOfPost } from "../../../Utils/utils";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { successToast } from "../../../Utils/toast";

export const PostCard = ({ post }) => {
  const [timeDifference, setTimeDifference] = useState("");
  const navigate = useNavigate();

  const {
    dataState: { users, bookmark },
    dataDispatch,
  } = useData();

  const { token, user } = useAuth();
  const findUser = users?.find(({ username }) => username === post?.username);

  const sharePostHandler = () => {
    if (navigator.share) {
      navigator.share({
        text: "Checkout this post",
        url: "http://localhost:3000/",
        title: "Shared from Ember",
        icon: "/public/bg2.svg",
      });
    } else {
      navigator.clipboard.writeText(
        "https://ember-react.netlify.app/post/"+ post?._id
      );
      successToast("Link Copied")
      if ("vibrate" in navigator) {
        navigator.vibrate(100);
      }
    }
  };

  useEffect(() => {
    setTimeDifference(timeOfPost(post?.updatedAt));
    console.log(post?.updatedAt);
    const interval = setInterval(() => {
      setTimeDifference(timeOfPost(post?.updatedAt));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [timeOfPost, post]);

  const renderMessageWithLinks = () => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(post?.content, "text/html");
    const links = parsedHTML.getElementsByTagName("a");

    const elements = [];

    let currentIndex = 0;
    Array.from(links).forEach((link) => {
      const username = link.getAttribute("data-username");
      const text = link.textContent.trim();
      const startIndex = link.parentNode.textContent.indexOf(text);

      if (startIndex > currentIndex) {
        const previousText = link.parentNode.textContent.substring(
          currentIndex,
          startIndex
        );
        elements.push(<span key={currentIndex}>{previousText}</span>);
      }

      const handleClick = (e) => {
        e.stopPropagation();
        navigate("/profile/" + username);
      };

      elements.push(
        <span
          key={currentIndex + 1}
          onClick={(e) => handleClick(e)}
          style={{ color: "var(--ember)", cursor: "pointer" }}
        >
          {text}{" "}
        </span>
      );

      currentIndex = startIndex + text.length;
    });

    const remainingText = parsedHTML.body.textContent
      .substring(currentIndex)
      .trim();
    if (remainingText) {
      elements.push(<span key={currentIndex + 1}>{remainingText}</span>);
    }

    return elements;
  };

  console.log(post?.content);
  return (
    <>
      <div className="postcard-container">
        <img
          src={findUser?.avatar}
          height="40"
          onClick={() => navigate("/profile/" + post?.username)}
        />
        <div className="postcard-info-container">
          <div className="postcard-header-flex">
            <div
              className="postcard-info-container-header"
              onClick={() => navigate("/profile/" + post?.username)}
            >
              <span className="header-name">
                {findUser?.firstName} {findUser?.lastName}
                <span className="header-name-edit">
                  {post?.edited ? " edited" : ""}
                </span>
                <BsDot />
                <span className="header-name-time">{timeDifference}</span>
              </span>
              <span className="header-username"> @{findUser?.username}</span>
            </div>

            <div className="header-menu">
              {user?.username === post?.username && (
                <EditMenu
                  content={post?.content}
                  user={user}
                  postId={post?._id}
                  token={token}
                  dispatch={dataDispatch}
                >
                  <BiDotsHorizontalRounded />
                </EditMenu>
              )}
            </div>
          </div>
          <div
            className="postcard-info-container-body"
            onClick={() => navigate("/post/" + post?._id)}
          >
            {/* Parsed Content */}
            <div className="postcard-info-container-body-content">
              {renderMessageWithLinks()}
            </div>

            {/* <p>{post?.content}</p> */}
          </div>
          <div className="postcard-action-container">
            <div className="postcard-action postcard-action-flex">
              {post?.likes?.likedBy?.some(
                ({ username }) => username === user?.username
              ) ? (
                <RxHeartFilled
                  onClick={() => unlikePost(post?._id, token, dataDispatch)}
                />
              ) : (
                <RxHeart
                  onClick={() => likePost(post?._id, token, dataDispatch)}
                />
              )}
              {post?.likes?.likeCount > 0 && (
                <LikePopover likedBy={post?.likes?.likedBy}>
                  <span className="postcard-action-likeCount">
                    {post?.likes?.likeCount}
                  </span>
                </LikePopover>
              )}
            </div>
            <div className="postcard-action">
              {bookmark?.some(({ _id }) => _id === post?._id) ? (
                <RxBookmarkFilled
                  onClick={() =>
                    removeBookmarkedPost(post?._id, token, dataDispatch)
                  }
                />
              ) : (
                <RxBookmark
                  onClick={() => bookmarkPost(post?._id, token, dataDispatch)}
                />
              )}
            </div>
            <div className="postcard-action">
              <RxShare2 onClick={sharePostHandler} />
            </div>
          </div>
        </div>
      </div>
      <hr className="postcard-hr" />
    </>
  );
};
