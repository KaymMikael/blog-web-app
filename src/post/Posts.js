import React from "react";
import PostItem from "../components/PostItem";

const Posts = () => {
  return (
    <section className="posts">
      <div className="d-flex justify-content-center">
        <h2 className="headline border-bottom pb-2 border-2 border-primary">
          Blogs
        </h2>
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <PostItem />
        <PostItem />
      </div>
    </section>
  );
};

export default Posts;
