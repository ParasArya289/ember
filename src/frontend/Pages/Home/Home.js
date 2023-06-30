import { CreatePost } from "../../Components/CreatePost/CreatePost";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestionBoxMobile } from "../../Components/SuggestionBoxMobile/SuggestionBoxMobile";
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

  const filterPostsOfFollowers = () => {
    const postIncludingCurrentUser = [
      you,
      ...following.map(({ username }) => username),
    ];
    return posts?.filter(({ username }) =>
      postIncludingCurrentUser.includes(username)
    );
  };

  const isMobile = window.innerWidth < 850;
  console.log(isMobile);

  return (
    <Feed>
      <div>
        <Navbar title={"Home"} />
        <CreatePost />
        <SuggestionBoxMobile />
        {filterPostsOfFollowers()?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </Feed>
  );
};
