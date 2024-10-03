import { useState } from "react";
import Introduction from "../components/Introduction";
import Posts from "../blog/Posts";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <section className="home">
      {!isAuthenticated ? <Introduction/> : <Posts/>}
    </section>
  );
};

export default Home;
