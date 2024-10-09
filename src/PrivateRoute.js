import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      await checkUser();
      setLoading(false);
    };
    verifyUser();
  }, []);

  if (loading) {
    // Render a loading indicator while the authentication is being checked
    return <div className="text-center">Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};
