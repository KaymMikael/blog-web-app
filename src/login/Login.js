import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className="login">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <h2 className="text-start">Log In</h2>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="loginName">
                Email
              </label>
              <input
                type="email"
                id="loginName"
                className="form-control"
                required
              />
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                required
              />
            </div>

            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link to={'/register'}>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
