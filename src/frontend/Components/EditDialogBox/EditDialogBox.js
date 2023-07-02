import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { editPost } from "../../AsyncUtilities/dataAsyncHelpers";

export const EditDialogBox = ({ children,user,content,postId, token, dispatch }) => {
  const [formData, setFormData] = useState(content);

  const editPostHandler = () => {
    if (formData) {
      const data = {
        content: formData,
      };
      editPost(data, postId, token, dispatch);
    //   setFormData("");
    }
  };
//   const handleAutoResize = (event) => {
//     event.target.style.height = 'auto';
//     event.target.style.height = `${event.target.scrollHeight}px`;
//   };
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
              placeholder="Whats happening?!"
              onChange={(e) => setFormData(e.target.value)}
              value={formData}
            />
          </Dialog.Description>

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
