import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/Provider/AuthProviders";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex flex-col space-y-6 items-center justify-center h-[70vh]">
        <progress className="progress w-56 "></progress>
        <h3 className="text-red-500 font-bold text-xl font-Poppins">Please Login then you can access this content <Link className="text-sky-300" to="/signin">Click Here to login</Link></h3>

      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivetRoute;