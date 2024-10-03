import React from "react";
import PostItem from "../components/PostItem";
import PageHeader from "../components/PageHeader";

const Posts = () => {
  return (
    <section className="posts">
      <PageHeader text={"Blogs"} />
      <div className="d-flex flex-column align-items-center gap-3">
        {/* Search Form */}
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
        {/* Posts */}
        <PostItem />
        <PostItem />
      </div>
    </section>
  );
};

export default Posts;
