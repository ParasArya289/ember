import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { useData } from "../../Context/dataContext";
import { Feed } from "../Feed/Feed";

export const SinglePost = () => {
  const { postId } = useParams();
  const {
    dataState: { posts },
  } = useData();
  const foundPost = posts?.find(({ _id }) => _id === postId);
  console.log(foundPost)
  return (
    <Feed navbar={<Navbar title={"Post"} />}>
      <PostCard post={foundPost} />
    </Feed>
  );
};
