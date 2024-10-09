import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import axiosHelper from "../axios/axiosHelper";
import PageHeader from "../components/PageHeader";
import { formatBlogDate } from "../utils/date";
import PostLikesList from "../components/PostLikesList";

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
      <PageHeader text={blog.title} />
      <div className="row row-gap-3">
        <div className="col-12 col-md-6">
          <div className="box-shadow rounded p-2">
            <p className="text-secondary text-center">
              {formatBlogDate(blog.date)}
            </p>
            <p>{blog.content}</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="box-shadow rounded p-2">
            <p className="text-secondary text-center">Who Likes The Post</p>
            <PostLikesList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
