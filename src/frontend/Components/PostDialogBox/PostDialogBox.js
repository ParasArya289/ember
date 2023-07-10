import React, { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import "./PostDialogBox.css";
import { useAuth } from "../../Context/authContext";
import { useData } from "../../Context/dataContext";
import { createPost } from "../../AsyncUtilities/dataAsyncHelpers";
import {
  linkMentionedUsername,
  usernameSuggestion,
} from "../../../Utils/utils";
import { UserUi } from "../CreatePost/CreatePost";

const PostDialogBox = ({ children }) => {
  const [suggesteduser, setSuggestedUser] = useState([]);
  const [formData, setFormData] = useState("");
  const { user, token } = useAuth();
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
    <Dialog.Root>
      <Dialog.Trigger className="DialogTrigger">{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            <div className="DialogUser">
              <img src={user?.avatar} height="40" />
            </div>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            <textarea
              ref={textAreaRef}
              placeholder="Whats happening?!"
              onChange={(e) => setFormData(e.target.value)}
              value={formData}
            />
          </Dialog.Description>
          {/* suggestedUser */}
          <div
            style={{
              display: "block",
              overflow: "hidden",
              whiteSpace: "wrap",
            }}
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

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button
                disabled={!formData.length}
                className="Button green"
                onClick={sendPost}
              >
                Post
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <RxCross2 />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PostDialogBox;
