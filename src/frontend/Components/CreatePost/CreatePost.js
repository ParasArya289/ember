import "./CreatePost.css";
import { useAuth } from "../../Context/authContext";
import { createPost } from "../../AsyncUtilities/dataAsyncHelpers";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../Context/dataContext";
import { usernameSuggestion } from "../../../Utils/utils";

export const UserUi = ({ user, inputRef}) => {
  const injectUserName = () => {
    const currentValue = inputRef.current.value;

    const checkLastSeen = currentValue.lastIndexOf("@");
    const newValue = currentValue.slice(0, checkLastSeen + 1);
    if (inputRef) {
      const injectedValue = newValue + user?.username + " ";
      inputRef.current.value = injectedValue;
      inputRef.current.focus();
    }
  };
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: "400",
        backgroundColor: "var(--background-blur-dark)",
        margin: "2px",
        padding: "5px",
        borderRadius: "30px",
        display: "inline-block",
      }}
      onClick={injectUserName}
    >
      <img
        src={user?.avatar}
        height="25"
        style={{
          borderRadius: "50%",
          height: "25px",
          width: "25px",
          marginRight: "4px",
          backgroundColor: "var(--secondary-color)",
        }}
      />
      <span>
        <span style={{ color: "var(--ember)" }}>@{user?.username}</span>
      </span>
    </div>
  );
};
export const CreatePost = () => {
  const [formData, setFormData] = useState("");
  const [suggesteduser, setSuggestedUser] = useState([]);
  const { token, user } = useAuth();
  const {
    dataState: { users },
    dataDispatch,
  } = useData();

  const textAreaRef = useRef();

  useEffect(() => {
    const res = usernameSuggestion(users, formData);
    setSuggestedUser(res);
  }, [formData]);

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
            ref={textAreaRef}
            placeholder="Whats happening?!"
            onChange={(e) => setFormData(e.target.value)}
            value={formData}
          />

          {/* suggestedUser */}
          <div
            style={{ display: "block", overflow: "hidden", whiteSpace: "wrap" }}
          >
            {suggesteduser?.slice(0, 4).map((user) => (
              <UserUi
                key={user?._id}
                user={user}
                inputRef={textAreaRef}
                setSuggestedUser={setSuggestedUser}
              />
            ))}
          </div>

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
