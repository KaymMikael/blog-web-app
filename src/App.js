import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import Login from "./login/Login";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main container-lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
