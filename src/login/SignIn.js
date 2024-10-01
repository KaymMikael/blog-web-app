import { Link } from "react-router-dom";

const SignIn = () => {
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
            <h2 className="text-start headline">Sign In</h2>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginName">
                Email
              </label>
              <input
                type="email"
                id="loginName"
                className="form-control"
                required
              />
              {/* error Message */}
              <p className="form-message mt-1"></p>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                required
              />
              {/* error Message */}
              <p className="form-message mt-1"></p>
            </div>

            <button type="submit" className="button mb-4 w-100 rounded">
              Sign In
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link to={"/register"}>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
