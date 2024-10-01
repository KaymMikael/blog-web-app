import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <h2 className="text-start headline">Sign Up</h2>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="form-control"
                required
              />
              {/* error Message */}
              <p className="form-message mt-1"></p>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
              />
              {/* error Message */}
              <p className="form-message mt-1"></p>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                required
              />
              {/* error Message */}
              <p className="form-message mt-1"></p>
            </div>

            <button type="submit" className="button mb-4 w-100 rounded">
              Sig Up
            </button>

            <div className="text-center">
              <p>
                Already have an acount? <Link to={"/login"}>Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
