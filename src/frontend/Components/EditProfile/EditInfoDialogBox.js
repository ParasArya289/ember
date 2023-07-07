import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { editProfile } from "../../AsyncUtilities/dataAsyncHelpers";
import { useAuth } from "../../Context/authContext";

export const EditInfoDialogBox = ({ children, foundUser }) => {
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const { setUser, token } = useAuth();
  const editInfoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userData = { ...foundUser };
    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }
    editProfile(userData, token, setUser);
    setOpen(false);
  };
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
                <label className="Label" htmlFor="name">
                  First Name
                </label>
                <input
                  className="Input"
                  name="firstName"
                  placeholder="FirstName"
                  required
                  defaultValue={foundUser?.firstName}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="name">
                  Last Name
                </label>
                <input
                  className="Input"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  defaultValue={foundUser?.lastName}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="link">
                  link
                </label>
                <input
                  className="Input"
                  type="url"
                  name="link"
                  placeholder="Link"
                  required
                  defaultValue={foundUser?.link}
                />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  className="Input"
                  name="bio"
                  required
                  defaultValue={foundUser?.bio}
                />
              </fieldset>
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
