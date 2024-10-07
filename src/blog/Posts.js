import React, { useContext } from "react";
import PostItem from "../components/PostItem";
import PageHeader from "../components/PageHeader";
import BlogContext from "../context/BlogContext";

const Posts = () => {
  const { blogs } = useContext(BlogContext);
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
        {blogs ? (
          blogs.map((blog) => <PostItem key={blog.id} blog={blog} />)
        ) : (
          <p>No blog for today</p>
        )}
      </div>
    </section>
  );
};

export default Posts;
