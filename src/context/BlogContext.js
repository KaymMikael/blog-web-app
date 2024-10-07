import { createContext, useEffect, useState } from "react";
import axiosHelper from "../axios/axiosHelper";
import useAxiosFetch from "../hooks/useAxios";

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const { data } = useAxiosFetch('http://localhost:3001/blogs');

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
