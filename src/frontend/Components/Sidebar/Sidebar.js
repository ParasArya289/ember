import "./Sidebar.css";
import { FaEmber } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { useAuth } from "../../Context/authContext";
import { motion } from "framer-motion";
import { MyPopover } from "../Popover/Popover";
import { ProfileHoverCard } from "../ProfileHoverCard/ProfileHoverCard";
import { NavLink, useNavigate } from "react-router-dom";
import PostDialogBox from "../PostDialogBox/PostDialogBox";
import { Nav } from "react-bootstrap";

export const Sidebar = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const activeTabStyle = ({isActive})=> `sidebar-links-link ${isActive && "sidebar-links-link-active"}`
  return (
    <nav className="sidebar-container">
      <div className="sidebar-links">
        <h1 className="sidebar-heading">
          <FaEmber />
        </h1>
        <NavLink to="/" className={activeTabStyle}>
          <AiFillHome />
          <span>Home</span>
        </NavLink>
        
        <NavLink to="/explore"
          className={activeTabStyle}
        >
          <MdExplore />
          <span>Explore</span>
        </NavLink>

        <NavLink to="/bookmark"
          className={activeTabStyle}
        >
          <BsFillBookmarkFill />
          <span>Bookmark</span>
        </NavLink>

        <PostDialogBox>
          <div className="sidebar-links-link">
            <BsFillSendFill />
            <span>Post</span>
          </div>
        </PostDialogBox>

        {token && (
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
        )}
      </div>
    </nav>
  );
};
