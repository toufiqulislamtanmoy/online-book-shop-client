import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProviders";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivetRoute;