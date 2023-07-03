import "./PostCard.css";
import { RxHeartFilled } from "react-icons/rx";
import { RxBookmarkFilled } from "react-icons/rx";
import { RxBookmark } from "react-icons/rx";
import { RxShare2 } from "react-icons/rx";
import { RxHeart } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";

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

export const PostCard = ({ post }) => {
  const {
    dataState: { users, bookmark },
    dataDispatch,
  } = useData();
  const { token, user } = useAuth();
  console.log(bookmark);

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
      navigator.clipboard.writeText("http://localhost:3000/");
    }
      navigator.vibrate(200);
  };

  return (
    <>
      <div className="postcard-container">
        <img src={findUser?.avatar} height="40" />
        <div className="postcard-info-container">
          <div className="postcard-header-flex">
            <div className="postcard-info-container-header">
              <span className="header-name">
                {findUser?.firstName} {findUser?.lastName}
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
          <div className="postcard-info-container-body">
            <p>{post?.content}</p>
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
              <LikePopover likedBy={post?.likes?.likedBy}>
                <span className="postcard-action-likeCount">
                  {post?.likes?.likeCount}
                </span>
              </LikePopover>
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
