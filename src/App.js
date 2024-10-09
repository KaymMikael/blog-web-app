import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import NotFound from "./NotFound";
import SignUp from "./signup/SignUp";
import SignIn from "./login/SignIn";
import NewBlog from "./blog/NewBlog";
import MyBlogs from "./blog/MyBlogs";
import { PrivateRoute } from "./PrivateRoute";
import Posts from "./blog/Posts";
import { Provider } from "./Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Nav />
        <main className="main container-lg">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path={"/dashboard"}
              element={
                <PrivateRoute>
                  <Posts />
                </PrivateRoute>
              }
            />
            <Route
              path={"/login"}
              element={
                <PrivateRoute>
                  <SignIn />
                </PrivateRoute>
              }
            />
            <Route
              path={"/register"}
              element={
                <PrivateRoute>
                  <SignUp />
                </PrivateRoute>
              }
            />
            <Route
              path={"/new-blog"}
              element={
                <PrivateRoute>
                  <NewBlog />
                </PrivateRoute>
              }
            />
            <Route
              path={"/my-blogs"}
              element={
                <PrivateRoute>
                  <MyBlogs />
                </PrivateRoute>
              }
            />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </main>
      </Provider>
    </div>
  );
}

export default App;
