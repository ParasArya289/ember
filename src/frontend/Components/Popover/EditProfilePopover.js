import "./EditProfilePopover.css";
import * as Popover from "@radix-ui/react-popover";
import { RxPencil1 } from "react-icons/rx";
import { RxExit } from "react-icons/rx";
import { useData } from "../../Context/dataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditProfilePopover = ({ children }) => {
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
            <div>
              <RxPencil1 />
              <span>Edit Profile</span>
            </div>
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
