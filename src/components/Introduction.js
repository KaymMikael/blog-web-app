import React from "react";
import HomeIllustration from "../assets/images/HomeIllustration.jpg";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Introduction = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <h1 className="headline">PostWave</h1>
        <p className="headline">
          Ride the Wave of Thoughts with Effortless Blogging
        </p>
        <p className="mt-5">
          PostWave is a dynamic blogging platform designed for users to
          effortlessly share their thoughts, ideas, and stories. With a seamless
          user experience, PostWave allows bloggers to easily create, edit, and
          manage their posts, engage with readers through an integrated comment
          system, and categorize content using tags. Built with a focus on
          community and creativity, the platform offers personalized user
          profiles, ensuring that every blogger can showcase their unique voice.
          Whether you're a seasoned writer or just starting out, PostWave
          empowers you to ride the wave of your thoughts and publish them for
          the world to see.
        </p>
        <div
          className="home-buttons"
          role="group"
          aria-label="login and learn more button"
        >
          <Link
            to={"/about"}
            className="btn btn-outline-primary me-2 rounded btn-md"
            style={{ textDecoration: "none" }}
          >
            Learn More
          </Link>
          <Link
            to={"/login"}
            className="btn btn-primary rounded btn-md"
            style={{ textDecoration: "none" }}
          >
            Log In
          </Link>
        </div>
        <Socials />
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
  );
};

export default Introduction;
