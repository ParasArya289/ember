import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { AiOutlineLogout } from "react-icons/ai";
import "./Popover.css";
import { useAuth } from "../../Context/authContext";
import { logoutHandler } from "../../AsyncUtilities/authAsyncHelpers";

export const MyPopover = ({ children, user }) => {
  const { setUser, setToken } = useAuth();
  const logout = () => logoutHandler(setUser,setToken)

  return (
    <div className="Popover">
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger"> {children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          <div>
            <img src={user?.avatar} height="30" />
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          <hr />
          <div onClick={logout}>
            <AiOutlineLogout style={{ fontSize: "20px" }} />
            <span>Logout @{user?.username}</span>
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
    </div>
  );
};
