import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import NotFound from "./NotFound";
import SignUp from "./signup/SignUp";
import SignIn from "./login/SignIn";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main container-lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
