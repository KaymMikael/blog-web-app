import { createContext, useState } from "react";
import axiosHelper from "../axios/axiosHelper";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  axiosHelper.defaults.withCredentials = true;

  const checkUser = async () => {
    try {
      console.log('check user called')
      const result = await axiosHelper.get("/users/auth");
      if (result.data.status === "success") {
        setIsAuthenticated(true);
        setUser(result.data.user.user);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response);
        return;
      }
      console.log(error.message);
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
