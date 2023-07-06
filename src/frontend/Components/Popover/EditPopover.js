import * as Popover from "@radix-ui/react-popover";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./EditPopover.css";
import { DeletePost, editPost } from "../../AsyncUtilities/dataAsyncHelpers";
import { EditDialogBox } from "../EditDialogBox/EditDialogBox";

export const EditMenu = ({
  children,
  user,
  content,
  postId,
  token,
  dispatch,
}) => {
  const deletePost = () => {
    DeletePost(postId, token, dispatch);
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
            <EditDialogBox
              content={content}
              user={user}
              postId={postId}
              token={token}
              dispatch={dispatch}
            >
              <div>
                <FiEdit2 />
                <button>Edit</button>
              </div>
            </EditDialogBox>
            <div>
              <AiOutlineDelete />
              <button onClick={deletePost}>Delete</button>
            </div>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
