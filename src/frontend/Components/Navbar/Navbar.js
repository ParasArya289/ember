import { Searchbar } from "../Searchbar/Searchbar";
import "./Navbar.css";
export const Navbar = ({ title }) => {
  return (
    <nav className="feed-nav">
      <p>{title}</p>
      <div className="feed-nav-search">
        <Searchbar />
      </div>
    </nav>
  );
};
