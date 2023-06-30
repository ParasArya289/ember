import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";
import "./Home.css";

export const Home = () => {
  
  return (
    <Feed>
      <Navbar title={"Home"} />
      <div>
        
      </div>
    </Feed>
  );
};
