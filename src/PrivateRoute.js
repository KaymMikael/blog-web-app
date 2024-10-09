import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const verifyUser = async () => {
      await checkUser();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    verifyUser();
  }, []);

  if (loading) {
    // Render a loading indicator while the authentication is being checked
    return <div className="text-center">Loading...</div>;
  }

  if (
    !isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return children;
  } else if (
    isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to={"/dashboard"} />;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};
