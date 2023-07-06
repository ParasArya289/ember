import * as Popover from "@radix-ui/react-popover";
import "./Popover.css";
import { useData } from "../../Context/dataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LikePopover = ({ children, likedBy }) => {
  const [open, setOpen] = useState(false);
  const {
    dataState: { users },
  } = useData();
  const navigate = useNavigate();

  const navigateToUserProfile = (username) => {
    if (username) {
      navigate("/profile/" + username);
      setOpen(false);
    }
  };
  const listLikedUsers = users?.filter(({ username }) =>
    likedBy?.some(({ username: name }) => name === username)
  );
  return (
    <div className="Popover">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger className="PopoverTrigger">
          {" "}
          {children}
        </Popover.Trigger>
        {listLikedUsers.length > 0 && (
          <Popover.Portal>
            <Popover.Content className="PopoverContent">
              {listLikedUsers?.map((user) => (
                <div
                  key={user?._id}
                  style={{ marginBlock: "10px", fontSize: "small" }}
                  onClick={() => navigateToUserProfile(user?.username)}
                >
                  <img
                    src={user?.avatar}
                    height="30"
                    style={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      backgroundColor: "var(--secondary-color)",
                    }}
                  />
                  <span>
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
              ))}
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        )}
      </Popover.Root>
    </div>
  );
};
