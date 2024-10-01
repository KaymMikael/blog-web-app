import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import LogIn from "./login/LogIn";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main container-lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
