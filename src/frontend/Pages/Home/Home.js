import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { useAuth } from "../../Context/authContext";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";
import "./Home.css";

export const Home = () => {
  const {
    dataState: { posts },
  } = useData();
  // const {
  //   user: { username:you,following=["johnsmith,parasarya"] },
  // } = useAuth();
  const filterPostsOfFollowers = () => {
    const you = "parasarya";
    const following = [you, "johnsmith", "emilyjohnson"];
    return posts?.filter(({ username }) => following.includes(username));
  };
  // console.log(posts)
  console.log(filterPostsOfFollowers());
  return (
    <Feed>
      <div>
        <Navbar title={"Home"} />
        {filterPostsOfFollowers()?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </Feed>
  );
};
