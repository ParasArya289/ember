import "./Feed.css";

import { Inforbar } from "../../Components/Infobar/Infobar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Navbar } from "../../Components/Navbar/Navbar";

export const Feed = ({children}) => {
  return (
    <div className="feed-container">
      <div className="sidebar">
        <div className="sidebar-fixed">
          <Sidebar />
        </div>
      </div>
      <div className="main-feed">
        <Navbar title={"Home"} />
        <div className="populated-feed">
          {/* <h2 style={{ color: "white" }}>Feed</h2>
         {[...Array(100)].map((_,i)=>(<div>test</div>))} */}
         {children}
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
