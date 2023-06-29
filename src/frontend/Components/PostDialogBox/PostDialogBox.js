import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import "./PostDialogBox.css";
import { useAuth } from "../../Context/authContext";

const PostDialogBox = ({ children }) => {
  const {user} = useAuth();
  return (
    <Dialog.Root>
      <Dialog.Trigger className="DialogTrigger">{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            <div className="DialogUser">
              <img src={user?.avatar} height="40"/>
            </div>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            <textarea placeholder="Whats happening?!"/>
          </Dialog.Description>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Post</button>
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
