import { Navbar } from "../../Components/Navbar/Navbar";
import { Feed } from "../Feed/Feed";
import "./Home.css";

export const Home = () => {
  return (
    <Feed>
      <Navbar title={"Home"} />
      <div>
        {[...Array(100)].map((el) => (
          <h1>Home</h1>
        ))}
      </div>
    </Feed>
  );
};
