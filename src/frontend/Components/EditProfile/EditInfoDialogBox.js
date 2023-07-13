import React, { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { editProfile } from "../../AsyncUtilities/dataAsyncHelpers";
import { useAuth } from "../../Context/authContext";
import {
  linkMentionedUsername,
  unlinkMentionedUsername,
  usernameSuggestion,
} from "../../../Utils/utils";
import { UserUi } from "../CreatePost/CreatePost";
import { useData } from "../../Context/dataContext";

export const EditInfoDialogBox = ({ children, foundUser }) => {
  const [open, setOpen] = useState(false);
  const [bio, setBio] = useState(foundUser?.bio);
  const [suggesteduser, setSuggestedUser] = useState([]);
  const formRef = useRef();

  const {
    dataState: { users },
  } = useData();

  const { setUser, token } = useAuth();

  const textAreaRef = useRef();
  useEffect(() => {
    const res = usernameSuggestion(users, bio, textAreaRef);
    setSuggestedUser(res);
  }, [bio]);

  const editInfoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userData = { ...foundUser };
    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }
    
    editProfile(
      { ...userData, bio: linkMentionedUsername(bio) },
      token,
      setUser
    );
    setOpen(false);
  };

  const unLinkedContent = unlinkMentionedUsername(bio);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="DialogTrigger">{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit Your Info</Dialog.Title>
          <Dialog.Description className="EditDialogDescription">
            <form ref={formRef} onSubmit={editInfoHandler}>
              <fieldset className="Fieldset">
                <input
                  className="Input"
                  name="firstName"
                  placeholder="FirstName"
                  required
                  defaultValue={foundUser?.firstName}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <input
                  className="Input"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  defaultValue={foundUser?.lastName}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <input
                  className="Input"
                  type="url"
                  name="link"
                  placeholder="Link"
                  defaultValue={foundUser?.link}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <textarea
                  ref={textAreaRef}
                  className="Input"
                  name="bio"
                  placeholder="Write your bio, Mention people with '@'"
                  onChange={(e) => setBio(e.target.value)}
                  defaultValue={unLinkedContent}
                />
              </fieldset>

              {suggesteduser?.slice(0, 4).map((user) => (
                <UserUi
                  key={user?._id}
                  user={user}
                  inputRef={textAreaRef}
                  setFormData={setBio}
                />
              ))}

              <div
                style={{
                  display: "flex",
                  marginTop: 25,
                  justifyContent: "flex-end",
                }}
              >
                <button className="Button green">Save changes</button>
              </div>
            </form>
          </Dialog.Description>

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
