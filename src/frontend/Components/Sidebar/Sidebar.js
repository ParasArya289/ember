import "./Sidebar.css";
import { FaEmber } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <nav>
      <div className="sidebar-links">
        <h1 className="sidebar-heading">
          <FaEmber />
        </h1>
        <div>
          <AiFillHome />
          <span>Home</span>
        </div>
        <div>
          <MdExplore />
          <span>Explore</span>
        </div>
        <div>
          <BsFillBookmarkFill />
          <span>Bookmark</span>
        </div>
        <div>
          <BsFillSendFill />
          <span>Post</span>
        </div>
      </div>
    </nav>
  );
};
