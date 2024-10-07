import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosHelper from "../axios/axiosHelper";
import { formatBlogDate } from "../utils/date";

const PostItem = ({ blog }) => {
  const [author, setAuthor] = useState("");

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
  }, []);

  return (
    <div className="post-item p-3">
      <div className="post-header d-flex justify-content-between align-items-baseline">
        <h4 className="post-title">{blog.title}</h4>
        <p className="post-date text-secondary">{formatBlogDate(blog.date)}</p>
      </div>
      <div className="post-body">
        <p>
          {blog.content.length > 150
            ? blog.content.slice(0, 150) + "..."
            : blog.content}
        </p>
        <p className="post-author text-secondary fst-italic">- {author}</p>
        <div className="post-links d-flex justify-content-between">
          <div className="reactions">
            <FaHeart
              className="heart-reaction"
              role="button"
              style={{ color: false && "red" }}
            />
            <span className="ms-1">{blog.totalLikes}</span>
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
