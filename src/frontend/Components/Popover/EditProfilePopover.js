import "./EditProfilePopover.css";
import * as Popover from "@radix-ui/react-popover";
import { RxPencil1 } from "react-icons/rx";
import { RxExit } from "react-icons/rx";
import { useData } from "../../Context/dataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileEditDialogBox } from "../ProfleEditDialogBox/ProfileEditDialogBox";

export const EditProfilePopover = ({ children, foundUser }) => {
  const [open, setOpen] = useState(false);
  const {
    dataState: { users },
  } = useData();
  const navigate = useNavigate();

  return (
    <div className="Popover">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger className="PopoverTrigger">{children}</Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className="EditProfilePopover">
            <ProfileEditDialogBox foundUser={foundUser} setOpen={setOpen}>
              <div>
                <RxPencil1 />
                <span>Edit Profile</span>
              </div>
            </ProfileEditDialogBox>
            <div>
              <RxExit />
              <span>Log out</span>
            </div>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
