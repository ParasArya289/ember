import { CreatePost } from "../../Components/CreatePost/CreatePost";
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
  const {
    user: { username: you, following },
  } = useAuth();
  console.log(you, following);
  const filterPostsOfFollowers = () => {
    const postIncludingCurrentUser = [
      you,
      ...following.map(({ username }) => username),
    ];
    return posts?.filter(({ username }) =>
      postIncludingCurrentUser.includes(username)
    );
  };
  console.log(filterPostsOfFollowers());
  return (
    <Feed>
      <div>
        <Navbar title={"Home"} />
        <CreatePost/>
        {filterPostsOfFollowers()?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </Feed>
  );
};
