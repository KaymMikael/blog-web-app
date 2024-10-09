import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxios";

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const { data: blogData } = useAxiosFetch("/blogs");
  const { data: reactionsData } = useAxiosFetch("/blogs/reactions");
  const [blogs, setBlogs] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  useEffect(() => {
    setBlogs(blogData.reverse());
    setReactions(reactionsData);
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
