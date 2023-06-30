import "./PostCard.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";

import { useData } from "../../Context/dataContext";
import { LikePopover } from "../Popover/LikePopover";

export const PostCard = ({ post }) => {
  const {
    dataState: { users },
  } = useData();

  const findUser = users?.find(({ username }) => username === post?.username);

  return (
    <>
      <div className="postcard-container">
        <img src={findUser?.avatar} height="40" />
        <div className="postcard-info-container">
          <div className="postcard-info-container-header">
            <span className="header-name">
              {findUser?.firstName} {findUser?.lastName}
            </span>
            <span className="header-username"> @{findUser?.username}</span>
          </div>
          <div className="postcard-info-container-body">
            <p>{post?.content}</p>
          </div>
          <div className="postcard-action-container">
            <div className="postcard-action postcard-action-flex">
              <AiOutlineHeart />
              <LikePopover likedBy={post?.likes?.likedBy}>
                <span className="postcard-action-likeCount">
                  {post?.likes?.likeCount}
                </span>
              </LikePopover>
            </div>
            <div className="postcard-action">
              <BiComment />
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