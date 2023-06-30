import * as Popover from "@radix-ui/react-popover";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./EditPopover.css";

export const EditMenu = ({ children }) => {
  return (
    <div className="Popover">
      <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">
          {" "}
          {children}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="Edit-PopoverContent">
            <div>
              <button>
                <FiEdit2 /> Edit
              </button>
            </div>
            <hr />
            <div>
              <button>
                <AiOutlineDelete /> Delete
              </button>
            </div>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
