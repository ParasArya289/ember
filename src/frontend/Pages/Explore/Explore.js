import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";
export const Explore = () => {
  const {
    dataState: { posts },
  } = useData();
  return (
    <Feed>
      <Navbar title={"Explore"} />
      <div>
        {posts?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </Feed>
  );
};
