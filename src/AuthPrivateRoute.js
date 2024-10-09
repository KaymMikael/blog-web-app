import { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { Navigate } from "react-router-dom";

export const AuthPrivateRoute = ({ children }) => {
  const { isAuthenticated, checkUser } = useContext(UserContext);

  useEffect(() => {
    const verifyUser = async () => {
      await checkUser();
      console.log("called");
    };
    verifyUser();
  }, []);

  return !isAuthenticated ? children : <Navigate to={"/dashboard"} />;
};
