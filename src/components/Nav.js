import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import UserContext from "../context/UserContext";
import axiosHelper from "../axios/axiosHelper";

const Nav = () => {
  const { isAuthenticated, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axiosHelper.get("/users/logout");
      setUser("");
      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-lg fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          PostWave
        </Link>
        {isAuthenticated && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav flex-grow-1 justify-content-end">
                <Link className="nav-link active headline" to={"/new-blog"}>
                  New Blog
                </Link>
                <Link className="nav-link headline" to={"/my-blogs"}>
                  My Blogs
                </Link>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/"}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogOut}>
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
