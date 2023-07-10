import React, { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { editPost } from "../../AsyncUtilities/dataAsyncHelpers";
import {
  linkMentionedUsername,
  usernameSuggestion,
} from "../../../Utils/utils";
import { useData } from "../../Context/dataContext";
import { UserUi } from "../CreatePost/CreatePost";

export const EditDialogBox = ({
  children,
  user,
  content,
  postId,
  token,
  dispatch,
}) => {
  const [suggesteduser, setSuggestedUser] = useState([]);
  const [formData, setFormData] = useState(content);
  const {
    dataState: { users },
  } = useData();

  const textAreaRef = useRef();
  useEffect(() => {
    const res = usernameSuggestion(users, formData);
    setSuggestedUser(res);
  }, [formData]);

  const editPostHandler = () => {
    if (formData) {
      const data = {
        content: linkMentionedUsername(formData),
        edited: true,
      };
      editPost(data, postId, token, dispatch);
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
                disabled={!formData?.length}
                className="Button green"
                onClick={editPostHandler}
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
