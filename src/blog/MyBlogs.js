import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import PostItem from "../components/PostItem";

const MyBlogs = () => {
  const { user } = useContext(UserContext);
  const { blogs } = useContext(BlogContext);
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    setUserBlogs(blogs.filter((blog) => blog.userId === user.id).reverse());
  }, [blogs]);

  return (
    <section className="my-blogs">
      <PageHeader text={"My Blogs"} />
      <div className="d-flex flex-column align-items-center gap-3">
        {userBlogs.length ? (
          userBlogs.map((blog) => <PostItem key={blog.id} blog={blog} />)
        ) : (
          <p>No blog for today</p>
        )}
      </div>
    </section>
  );
};

export default MyBlogs;
