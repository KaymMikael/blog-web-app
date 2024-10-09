import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxios";

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const { data: blogData } = useAxiosFetch("/blogs");
  const [blogs, setBlogs] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  useEffect(() => {
    if (blogData.length) {
      setBlogs(blogData.reverse());
    }
  }, [blogData]);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        userLikes,
        setUserLikes,
        reactions,
        setReactions,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
