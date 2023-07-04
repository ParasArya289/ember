import "./Feed.css";

import { Inforbar } from "../../Components/Infobar/Infobar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Feed = ({ children, navbar, filterbar, showfilterbar }) => {
  return (
    <div className="feed-container">
      <div className="sidebar">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>
      </div>
      <div className="main-feed">
        {navbar}
        {showfilterbar && filterbar}
        <div className="main-feed-container">
          <div className="main-feed-populated">{children}</div>
        </div>
      </div>
      <div className="info-bar">
        <div className="info-bar-fixed">
          <Inforbar />
        </div>
      </div>
    </div>
  );
};
