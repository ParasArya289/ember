import { createContext, useContext, useEffect, useReducer } from "react";
import { getPosts, getUser } from "../AsyncUtilities/dataAsyncHelpers";
import { dataReducer, initDataState } from "../Reducer/dataReducer";
import { useAuth } from "./authContext";

const dataContext = createContext();

export const DataContext = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initDataState);

  const { user } = useAuth();

  useEffect(() => {
    getUser(dataDispatch);
    getPosts(dataDispatch);
  }, []);

  //abstract this part
  useEffect(() => {
    const { users } = dataState;
    if (user && users.length) {
      const { username, followers } = user;
      const notFollowingList = users?.filter(
        (user) => user?.username !== username && !followers?.includes(username)
      );
      dataDispatch({ type: "INIT_NOT_FOLLOWING", payload: notFollowingList });
      console.log(notFollowingList);
    }
  }, [user,dataState.users]);

  return (
    <dataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
