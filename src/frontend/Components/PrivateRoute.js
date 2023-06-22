import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const {token} = useAuth();
  console.log(token)
  return token ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
};
