import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Socials = () => {
  return (
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
  );
};

export default Socials;
