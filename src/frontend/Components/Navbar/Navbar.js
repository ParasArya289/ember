import { Searchbar } from "../Searchbar/Searchbar";
import "./Navbar.css";
export const Navbar = ({ title }) => {
  return (
    <nav className="feed-nav">
      <h5>{title}</h5>
      <div className="feed-nav-search">
        <Searchbar />
      </div>
    </nav>
  );
};
