import "./PostCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { useData } from "../../Context/dataContext";
import { LikePopover } from "../Popover/LikePopover";
import { useAuth } from "../../Context/authContext";
import { useState } from "react";
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

  const findUser = users?.find(({ username }) => username === post?.username);

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
              {post?.likes?.likedBy?.some(({username})=>username === user?.username) ? (
                <AiFillHeart
                  onClick={() => unlikePost(post?._id, token, dataDispatch)}
                />
              ) : (
                <AiOutlineHeart
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
              {bookmark.some(({ _id }) => _id === post?._id) ? (
                <BsBookmarkFill
                  onClick={() =>
                    removeBookmarkedPost(post?._id, token, dataDispatch)
                  }
                />
              ) : (
                <BsBookmark
                  onClick={() => bookmarkPost(post?._id, token, dataDispatch)}
                />
              )}
            </div>
            <div className="postcard-action">
              <AiOutlineShareAlt />
            </div>
          </div>
        </div>
      </div>
      <hr className="postcard-hr" />
    </>
  );
};
