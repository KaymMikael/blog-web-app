import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
                  <a
                    className="btn btn-primary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/"}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/"}>
                        Log out
                      </Link>
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
