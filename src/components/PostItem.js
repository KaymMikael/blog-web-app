import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosHelper from "../axios/axiosHelper";
import { formatBlogDate } from "../utils/date";
import BlogContext from "../context/BlogContext";
import UserContext from "../context/UserContext";

const PostItem = ({ blog }) => {
  const [author, setAuthor] = useState("");
  const [isLiked, setIsLiked] = useState(null);
  const { user } = useContext(UserContext);
  const { userLikes, setUserLikes } = useContext(BlogContext);
  const [totalLikes, setTotalLikes] = useState(0);

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

  useEffect(() => {
    setTotalLikes(blog.totalLikes);
  }, []);

  useEffect(() => {
    // Check if the user has liked the current blog when userLikes updates
    setIsLiked(userLikes.some((likes) => likes.blogId === blog.id));
  }, [userLikes, blog.id]);

  useEffect(() => {
    const fetchUserLikes = async () => {
      try {
        const result = await axiosHelper.get(
          `/blogs/user/reactions/${user.id}`
        );
        setUserLikes(result.data);
      } catch (e) {
        console.log(e.response);
      }
    };
    fetchUserLikes();
  }, []);

  const handleLike = async () => {
    try {
      if (isLiked) {
        // Optimistically update UI before API response
        setIsLiked(false);
        setTotalLikes((prev) => prev - 1);

        // Call API to delete the reaction and update blog's likes
        await axiosHelper.delete(`/blogs/reactions/${blog.id}`);
        await axiosHelper.patch(`/blogs/${blog.id}/unlike`);

        // Remove like from userLikes
        const newUserLikes = userLikes.filter(
          (likes) => likes.blogId !== blog.id
        );
        setUserLikes(newUserLikes);
      } else {
        // Optimistically update UI before API response
        setIsLiked(true);
        setTotalLikes((prev) => prev + 1);

        // Call API to add a reaction and update blog's likes
        const newData = { userId: user.id, blogId: blog.id };
        const result = await axiosHelper.post("/blogs/reactions", newData);
        await axiosHelper.patch(`/blogs/${blog.id}/like`);

        // Add like to userLikes
        const newLike = { ...newData, id: result.data.result.insertId };
        setUserLikes((prev) => [...prev, newLike]);
      }
    } catch (e) {
      console.log(e.response);
    }
  };

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
              onClick={handleLike}
              style={{ color: isLiked && "red" }}
            />
            <span className="ms-1">{totalLikes}</span>
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
