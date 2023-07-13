import "./CreatePost.css";
import { useAuth } from "../../Context/authContext";
import { createPost } from "../../AsyncUtilities/dataAsyncHelpers";
import { useEffect, useRef, useState } from "react";
import { useData } from "../../Context/dataContext";
import {
  linkMentionedUsername,
  usernameSuggestion,
} from "../../../Utils/utils";

export const UserUi = ({ user, inputRef, setFormData }) => {
  const injectUserName = () => {
    const cursorIndex = inputRef.current.selectionStart;
    const currentValue = inputRef.current.value;

    const regex = /@(\w+)/g;
    let match;

    while ((match = regex.exec(currentValue)) !== null) {
      const mentionIndex = match.index;
      const mentionLength = match[0].length;

      if (
        mentionIndex <= cursorIndex &&
        cursorIndex <= mentionIndex + mentionLength
      ) {
        const injectedValue =
          currentValue.slice(0, mentionIndex + 1) +
          user?.username +
          " " +
          currentValue.slice(mentionIndex + mentionLength);
        inputRef.current.value = injectedValue;
        setFormData(injectedValue);
        inputRef.current.focus();
        inputRef.current.selectionEnd = (
          currentValue.slice(0, mentionIndex + 1) +
          user?.username +
          " "
        ).length;
        break;
      }
    }
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      injectUserName();
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
      tabIndex={0}
      onClick={injectUserName}
      onKeyDown={handleEnterKey}
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
    const res = usernameSuggestion(users, formData, textAreaRef);
    setSuggestedUser(res);
  }, [formData]);

  const sendPost = () => {
    if (formData) {
      const data = {
        content: linkMentionedUsername(formData),
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
            className="textarea"
            placeholder="Hey! What's up? Mention your crew with '@'"
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
                setFormData={setFormData}
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
