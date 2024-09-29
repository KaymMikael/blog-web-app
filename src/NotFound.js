import { Link } from "react-router-dom";
import NotFoundIllustration from "./assets/images/NotFoundIllustration.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex align-items-center flex-column">
        <img
          src={NotFoundIllustration}
          alt="Page not found illustration"
          className="w-100"
          style={{ maxWidth: "600px" }}
        />
        <div className="not-found-message text-center">
          <p>Page Not Found</p>
          <Link to={"/"} style={{textDecoration:'none'}}>Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
