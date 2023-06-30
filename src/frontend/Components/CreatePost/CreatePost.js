import "./CreatePost.css";
import { useAuth } from "../../Context/authContext";
import { createPost } from "../../AsyncUtilities/dataAsyncHelpers";
import { useState } from "react";
import { useData } from "../../Context/dataContext";

export const CreatePost = () => {
  const [formData, setFormData] = useState("");
  const { token, user } = useAuth();
  const { dataDispatch } = useData();

  const sendPost = () => {
    if (formData) {
      const data = {
        content: formData,
        username: user?.username,
      };
      createPost(data, token, dataDispatch);
      setFormData("");
    }
  };
  return (
    <>
      <div className="createpost-container">
        <div className="createpost-avatar">
          <img src={user?.avatar} height="40" />
        </div>
        <div className="createpost-input">
          <textarea
            placeholder="Whats happening?!"
            onChange={(e) => setFormData(e.target.value)}
            value={formData}
          />
          <button
            disabled={!formData.length}
            className="Button green"
            onClick={sendPost}
          >
            Post
          </button>
        </div>
      </div>
      <hr className="postcard-hr" />
    </>
  );
};
