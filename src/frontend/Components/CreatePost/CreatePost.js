import "./CreatePost.css";
import { useAuth } from "../../Context/authContext";

export const CreatePost = () => {
    const {user} = useAuth();
  return (
    <>
    <div className="createpost-container">
      <div className="createpost-avatar">
        <img src={user?.avatar} height="40" />
      </div>
      <div className="createpost-input">
      <textarea placeholder="Whats happening?!" />
      </div>
    <button className="Button green">Post</button>
    </div>
    <hr className="postcard-hr"/>
    </>
  );
};
