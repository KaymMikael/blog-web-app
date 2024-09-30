import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import HomeIllustration from "../assets/images/HomeIllustration.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h1 className="headline">PostWave</h1>
          <p className="headline">
            Ride the Wave of Thoughts with Effortless Blogging
          </p>
          <p className="mt-5">
            PostWave is a dynamic blogging platform designed for users to
            effortlessly share their thoughts, ideas, and stories. With a
            seamless user experience, PostWave allows bloggers to easily create,
            edit, and manage their posts, engage with readers through an
            integrated comment system, and categorize content using tags. Built
            with a focus on community and creativity, the platform offers
            personalized user profiles, ensuring that every blogger can showcase
            their unique voice. Whether you're a seasoned writer or just
            starting out, PostWave empowers you to ride the wave of your
            thoughts and publish them for the world to see.
          </p>
          <div
            className="home-buttons"
            role="group"
            aria-label="login and learn more button"
          >
            <Link
              to={"/about"}
              className="button button-outlined me-2 rounded"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </Link>
            <Link
              to={"/login"}
              className="button rounded btn-lg"
              style={{ textDecoration: "none" }}
            >
              Log In
            </Link>
          </div>
          <div className="socials mt-5 fs-4 d-flex gap-3">
            <Link
              className="nav-link"
              to={"https://www.facebook.com"}
              target="_blank"
              style={{ textDecoration: "none", color: "#272343" }}
            >
              <FaFacebook />
            </Link>
            <Link
              className="nav-link"
              to={"https://www.x.com"}
              target="_blank"
              style={{ textDecoration: "none", color: "#272343" }}
            >
              <FaXTwitter />
            </Link>
            <Link
              className="nav-link"
              to={"https://www.instagram.com"}
              target="_blank"
              style={{ textDecoration: "none", color: "#272343" }}
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-end">
          <img
            src={HomeIllustration}
            alt="Home page illustration"
            className="w-100"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
