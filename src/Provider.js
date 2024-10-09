import { BlogProvider } from "./context/BlogContext";
import { UserProvider } from "./context/UserContext";

export const Provider = ({ children }) => {
  return (
    <UserProvider>
      <BlogProvider>{children}</BlogProvider>
    </UserProvider>
  );
};
