import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosHelper from "../axios/axiosHelper";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [fade, setFade] = useState(false);
  const navigate = useNavigate("");
  axiosHelper.defaults.withCredentials = true;
  
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      await axiosHelper.post("/users/login", user);
      //Reset inputs
      setEmail("");
      setPassword("");
      //navigate to home page after signing up
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.error); // Access error message from the backend
      } else {
        setMessage("An error occurred while registering.");
      }
      setMessageType("error");
      setFade(false);
      fadeMessage(); // Start the fade after 3 seconds
    }
  };

  // Function to make the message fade after 3 seconds
  const fadeMessage = () => {
    setTimeout(() => {
      setFade(true);
      setMessage("");
    }, 3000); // Fade out after 3 seconds
  };

  return (
    <section className="login">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleLogIn}>
            <h2 className="text-start headline">Sign In</h2>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Message */}
            {message && (
              <p
                className={`message ${fade ? "fade" : ""} ${
                  messageType === "success" ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary mb-4 w-100 rounded"
            >
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
