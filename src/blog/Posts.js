import React, { useContext, useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import PageHeader from "../components/PageHeader";
import BlogContext from "../context/BlogContext";

const Posts = () => {
  const { blogs } = useContext(BlogContext);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (!search) {
      setSearchResult(blogs);
      return;
    }
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredBlogs);
  }, [search, blogs]);

  return (
    <section className="posts">
      <PageHeader text={"Blogs"} />
      <div className="d-flex flex-column align-items-center gap-3">
        {/* Search Form */}
        <form
          className="d-flex w-100"
          role="search"
          onSubmit={(e) => e.preventDefault()}
          style={{ maxWidth: "600px" }}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search by Title or Author"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* Blogs */}
        {searchResult.length ? (
          searchResult.map((blog) => <PostItem key={blog.id} blog={blog} />)
        ) : (
          <p>No blog for today</p>
        )}
      </div>
    </section>
  );
};

export default Posts;
