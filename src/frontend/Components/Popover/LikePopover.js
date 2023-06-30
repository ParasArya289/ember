import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import "./Popover.css";
import { useData } from "../../Context/dataContext";

export const LikePopover = ({ children, likedBy }) => {
  const {
    dataState: { users },
  } = useData();
  const listLikedUsers = users?.filter(({ username }) =>
    likedBy.includes(username)
  );
  return (
    <div className="Popover">
      <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">
          {" "}
          {children}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent">
            {listLikedUsers?.map((user) => (
              <>
                <div key={user?._id} style={{marginBlock:"10px",fontSize:"small"}}>
                  <img src={user?.avatar} height="30" style={{borderRadius:"50%"}}/>
                  <span>{user?.firstName} {user?.lastName}</span>
                </div>
              </>
            ))}
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
