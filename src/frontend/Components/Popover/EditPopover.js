import * as Popover from "@radix-ui/react-popover";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./EditPopover.css";
import { DeletePost } from "../../AsyncUtilities/dataAsyncHelpers";

export const EditMenu = ({ children,postId,token, dispatch }) => {
  const deletePost = () => {
    DeletePost(postId,token, dispatch);
  };
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
              <button onClick={deletePost}>
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
