import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  loginUser,
  singupUser,
} from "../../frontend/AsyncUtilities/authAsyncHelpers";
import { errorToast } from "../../Utils/toast";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorageToken);
  const [user, setUser] = useState(localStorageUser);
  const [authLoading, setAuthLoading] = useState(false);

  const loginHandler = async (userCred) => {
    try {
      setAuthLoading(true);
      const res = await loginUser(userCred);
      const { foundUser, encodedToken } = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Your not registered, Signup to continue");
        } else if (res.status === 401) {
          throw new Error("Wrong email or password");
        } else {
          throw new Error(res.status);
        }
      }
      if (res.status === 200) {
        localStorage.setItem("token", encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
      }
    } catch (e) {
      console.error(e.message);
      errorToast(e.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const singupHandler = async (userDetails) => {
    try {
      setAuthLoading(true);
      const res = await singupUser(userDetails);
      const { createdUser, encodedToken } = await res.json();
      if (!res.ok) {
        if (res.status === 422) {
          throw new Error("Account by this Email already exist");
        } else {
          throw new Error(res.status);
        }
      }
      if (res.status === 201) {
        localStorage.setItem("token", encodedToken);
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify(createdUser));
        setUser(createdUser);
      }
    } catch (e) {
      console.error(e.message);
      errorToast(e.message);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        loginHandler,
        singupHandler,
        authLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
