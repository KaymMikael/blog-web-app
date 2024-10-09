import React, { useContext, useState } from "react";
import PageHeader from "../components/PageHeader";
import UserContext from "../context/UserContext";
import axiosHelper from "../axios/axiosHelper";
import BlogContext from "../context/BlogContext";
import { getTimeStamp } from "../utils/date";

const NewBlog = () => {
  const { setBlogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [fade, setFade] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlog = {
        userId: user.id,
        title,
        content,
        totalLikes: 0,
        date: getTimeStamp(new Date()),
      };
      console.log(newBlog);
      const result = await axiosHelper.post("/blogs/create", newBlog);
      // returns the full blog with its new ID
      const createdBlog = { ...newBlog, id: result.data.id };
      // Update the blogs context with the new blog
      setBlogs((prevBlogs) => [createdBlog, ...prevBlogs]);

      setMessage(result.data.message);
      setMessageType("success");
      setFade(false);
      fadeMessage();

      // Reset inputs
      setTitle("");
      setContent("");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred while registering.");
      }
      setMessageType("error");
      setFade(false);
      fadeMessage();
    }
  };
  // Function to make the message fade after 3 seconds
  const fadeMessage = () => {
    setTimeout(() => {
      setFade(true);
      setMessage("");
    }, 3000); // Fade out after 3 seconds
  };

  return (
    <section className="new-post">
      <PageHeader text={"New Blog"} />
      <div className="tab-content">
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="blogTitle">
              Title
            </label>
            <input
              type="text"
              id="blogTitle"
              className="form-control"
              required
              minLength={4}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* error Message */}
            <p className="form-message mt-1"></p>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="blogContent">
              Content
            </label>
            <textarea
              id="blogContent"
              className="form-control"
              required
              minLength={8}
              style={{ height: "150px" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          {/* Message */}
          {message && (
            <p
              className={`message ${fade ? "fade" : ""} ${
                messageType === "success" ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
          <button type="submit" className="btn btn-primary mb-4 w-100 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewBlog;
