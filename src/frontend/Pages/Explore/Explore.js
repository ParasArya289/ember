import { Navbar } from "../../Components/Navbar/Navbar";
import { Feed } from "../Feed/Feed";

export const Explore = () => {
  return (
    <Feed>
      <Navbar title={"Explore"} />
      <div>
        {[...Array(100)].map((el) => (
          <h1>Explore</h1>
        ))}
      </div>
    </Feed>
  );
};
