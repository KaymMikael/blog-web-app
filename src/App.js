import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import NotFound from "./NotFound";
import SignUp from "./signup/SignUp";
import SignIn from "./login/SignIn";
import NewBlog from "./blog/NewBlog";
import MyBlogs from "./blog/MyBlogs";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main container-lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/new-blog"} element={<NewBlog />} />
          <Route path={"/my-blogs"} element={<MyBlogs />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
