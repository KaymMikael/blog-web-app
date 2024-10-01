import { useState } from "react";
import Introduction from "../components/Introduction";
import Posts from "../post/Posts";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <section className="home">
      {!isAuthenticated ? <Introduction/> : <Posts/>}
    </section>
  );
};

export default Home;
