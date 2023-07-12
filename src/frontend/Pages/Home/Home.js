import { CreatePost } from "../../Components/CreatePost/CreatePost";
import { Filterbar } from "../../Components/Filterbar/Filterbar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { SuggestionBoxMobile } from "../../Components/SuggestionBoxMobile/SuggestionBoxMobile";
import { useAuth } from "../../Context/authContext";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";
import "./Home.css";

export const Home = () => {
  const {
    dataState: { posts, sortedPosts },
  } = useData();
  const {
    user: { username: you, following },
  } = useAuth();

  const filterPostsOfFollowers = () => {
    const postIncludingCurrentUser = [
      you,
      ...following.map(({ username }) => username),
    ];
    return sortedPosts?.filter(({ username }) =>
      postIncludingCurrentUser.includes(username)
    );
  };

  const isMobile = window.innerWidth < 850;
  console.log(isMobile);

  return (
    <Feed
      navbar={<Navbar title={"Home"} />}
      filterbar={<Filterbar />}
      showfilterbar
    >
      <CreatePost />
      <div className="home-posts">
        <SuggestionBoxMobile />
        {filterPostsOfFollowers()?.length <= 0 && <h1>No Post</h1>}
        {filterPostsOfFollowers()?.map((post) => (
          <PostCard key={post?.id} post={post} />
          ))}
      </div>
    </Feed>
  );
};
