import "./PostCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { useData } from "../../Context/dataContext";
import { LikePopover } from "../Popover/LikePopover";
import { useAuth } from "../../Context/authContext";
import { useState } from "react";
import { EditMenu } from "../Popover/EditPopover";

export const PostCard = ({ post }) => {
  const {
    dataState: { users },
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
              {post?.likes?.likedBy.includes(user?.username) ? (
                <AiFillHeart />
              ) : (
                <AiOutlineHeart />
              )}
              <LikePopover likedBy={post?.likes?.likedBy}>
                <span className="postcard-action-likeCount">
                  {post?.likes?.likeCount}
                </span>
              </LikePopover>
            </div>
            <div className="postcard-action">
              <BsBookmark />
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
