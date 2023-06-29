import { Navbar } from "../../Components/Navbar/Navbar";
import { Feed } from "../Feed/Feed";

export const Bookmark = () => {
  return (
    <Feed>
      <Navbar title={"Bookmark"} />
      <div>
        {[...Array(100)].map((el) => (
          <h1>Bookmark</h1>
        ))}
      </div>
    </Feed>
  );
};
