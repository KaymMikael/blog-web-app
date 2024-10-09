import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import axiosHelper from "../axios/axiosHelper";

const BlogPage = () => {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const [author, setAuthor] = useState("");

  const blog = blogs.find((blog) => blog.id === parseInt(id));
  useEffect(() => {
    console.log(blog);
  }, [id]);

  //Get the author of the blog
  useEffect(() => {
    const getUserById = async (userId) => {
      try {
        const result = await axiosHelper.get(`/users/${userId}`);
        setAuthor(result.data[0].username);
      } catch (error) {
        console.log(error.response);
      }
    };
    getUserById(blog.userId);
  }, [blog.userId]);

  return (
    <section className="blog-page">
      <h1>Blog Page</h1>
      <p>{JSON.stringify(blog)}</p>
    </section>
  );
};

export default BlogPage;
