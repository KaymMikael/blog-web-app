import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostItem = () => {
  return (
    <div className="post-item p-3">
      <div className="post-header d-flex justify-content-between align-items-baseline">
        <h4 className="post-title">Post Title</h4>
        <p className="post-date text-secondary">Fri June 23, 2006</p>
      </div>
      <div className="post-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
          voluptatum architecto rem, soluta repudiandae?...
        </p>
        <p className="post-author text-secondary fst-italic">
          - Khaim Michael Altiz
        </p>
        <div className="post-links d-flex justify-content-between">
          <div className="reactions">
            <FaHeart
              className="heart-reaction"
              role="button"
              style={{ color: true && 'red' }}
            />
            <span className="ms-1">1</span>
          </div>
          <Link to={"/post/:id"} style={{ textDecoration: "none" }}>
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
