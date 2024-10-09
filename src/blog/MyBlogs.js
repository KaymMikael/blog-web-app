import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import BlogContext from "../context/BlogContext";

const MyBlogs = () => {
  const { user } = useContext(UserContext);
  const { blogs } = useContext(BlogContext);
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    setUserBlogs(blogs.filter((blog) => blog.userId === user.id));
  }, [blogs]);

  return (
    <section className="my-blogs">
      <PageHeader text={"My Blogs"} />
    </section>
  );
};

export default MyBlogs;
