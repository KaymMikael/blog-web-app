import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-lg fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Blog Web App
        </Link>
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
          <div className="navbar-nav flex-grow-1 justify-content-end ">
            <Link className="nav-link active headline" to={"/"}>
              Home
            </Link>
            <Link className="nav-link headline" to={"/about"}>
              About
            </Link>
            <Link className="nav-link headline button rounded" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
