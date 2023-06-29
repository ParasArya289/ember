import "./Sidebar.css";
import { FaEmber } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { useAuth } from "../../Context/authContext";
import { motion } from "framer-motion";
import { MyPopover } from "../Popover/Popover";
import { ProfileHoverCard } from "../ProfileHoverCard/ProfileHoverCard";
import { useNavigate } from "react-router-dom";
import PostDialogBox from "../PostDialogBox/PostDialogBox";
export const Sidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="sidebar-container">
      <div className="sidebar-links">
        <h1 className="sidebar-heading">
          <FaEmber />
        </h1>
        <div className="sidebar-links-link" onClick={() => navigate("/")}>
          <AiFillHome />
          <span>Home</span>
        </div>
        <div
          className="sidebar-links-link"
          onClick={() => navigate("/explore")}
        >
          <MdExplore />
          <span>Explore</span>
        </div>
        <div
          className="sidebar-links-link"
          onClick={() => navigate("/bookmark")}
        >
          <BsFillBookmarkFill />
          <span>Bookmark</span>
        </div>

        <PostDialogBox>
          <div className="sidebar-links-link">
            <BsFillSendFill />
            <span>Post</span>
          </div>
        </PostDialogBox>

        <motion.div whileHover={{ scale: 1.04 }} className="sidebar-user">
          <MyPopover user={user}>
            <div className="sidebar-user-flex">
              <ProfileHoverCard user={user}>
                <div className="sidebar-user-img">
                  <img src={user?.avatar} />
                </div>
              </ProfileHoverCard>

              <div className="sidebar-user-info">
                <p>
                  {user?.firstName} {user?.lastName}
                </p>
                <p>@{user?.username}</p>
              </div>
            </div>
          </MyPopover>
        </motion.div>
      </div>
    </nav>
  );
};
