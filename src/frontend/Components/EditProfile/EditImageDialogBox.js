import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";

export const EditImageDialogBox = ({
  children,
  dialogFor,
  foundUser,
  title,
}) => {
  const formRef = useRef();
  return (
    <Dialog.Root>
      <Dialog.Trigger className="DialogTrigger">{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
          <Dialog.Description className="EditDialogDescription">
            <form ref={formRef}>
              {dialogFor === "avatar" ? (
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="username">
                    Avatar
                  </label>
                  <input
                    className="Input"
                    type="url"
                    name="avatar"
                    placeholder="Avatar URL"
                    defaultValue={foundUser?.avatar}
                  />
                </fieldset>
              ) : (
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="username">
                    Background
                  </label>
                  <input
                    className="Input"
                    type="url"
                    name="bg"
                    placeholder="Background URL"
                    required
                    defaultValue={foundUser?.bg}
                  />
                </fieldset>
              )}
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
