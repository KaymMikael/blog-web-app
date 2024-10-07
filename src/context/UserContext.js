import { createContext, useState } from "react";
import axiosHelper from "../axios/axiosHelper";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  axiosHelper.defaults.withCredentials = true;

  const checkUser = async () => {
    try {
      const result = await axiosHelper.get("/users/auth");
      if (result.data.status === "success") {
        setIsAuthenticated(true);
        setUser(result.data.user);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, checkUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
