import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./home/Home";
import Login from "./login/Login";

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main container-lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
