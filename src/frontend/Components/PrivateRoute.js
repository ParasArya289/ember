import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = true;
  return token ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location?.pathname }} replace />
  );
};
