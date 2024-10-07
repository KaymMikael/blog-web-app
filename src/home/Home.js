import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import Introduction from "../components/Introduction";
import Posts from "../blog/Posts";

const Home = () => {
  const { isAuthenticated, checkUser } = useContext(UserContext);

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <section className="home">
      {!isAuthenticated ? <Introduction /> : <Posts />}
    </section>
  );
};

export default Home;
