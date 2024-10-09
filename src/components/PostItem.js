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
  const { userLikes, setUserLikes, setBlogs } = useContext(BlogContext);
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
  }, [isLiked]);

  // Update total likes in the blogs context
  const updateBlogLikes = (blogId, newTotalLikes) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((b) =>
        b.id === blogId ? { ...b, totalLikes: newTotalLikes } : b
      )
    );
  };

  const handleLike = async () => {
    try {
      if (isLiked) {
        setIsLiked(false);
        const updatedLikes = totalLikes - 1;
        setTotalLikes(updatedLikes);
        await axiosHelper.delete(`/blogs/reactions/${blog.id}/${user.id}`);
        await axiosHelper.patch(`/blogs/${blog.id}/unlike`);
        const newUserLikes = userLikes.filter(
          (likes) => likes.blogId !== blog.id
        );
        setUserLikes(newUserLikes);
        updateBlogLikes(blog.id, updatedLikes); // Update context
      } else {
        setIsLiked(true);
        const updatedLikes = totalLikes + 1;
        setTotalLikes(updatedLikes);
        const newData = { userId: user.id, blogId: blog.id };
        const result = await axiosHelper.post("/blogs/reactions", newData);
        await axiosHelper.patch(`/blogs/${blog.id}/like`);
        setUserLikes((prev) => [
          ...prev,
          { ...newData, id: result.data.result.insertId },
        ]);
        updateBlogLikes(blog.id, updatedLikes); // Update context
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
          <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
