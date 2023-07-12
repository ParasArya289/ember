import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";

export const Bookmark = () => {
  const {
    dataState: { bookmark },
  } = useData();
  return (
    <Feed navbar={<Navbar title={"Bookmark"} />}>
      <div>
        {bookmark?.length <= 0 && <h1>No Bookmarked Post</h1>}
        {bookmark?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </Feed>
  );
};
