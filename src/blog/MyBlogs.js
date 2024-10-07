import React, { useContext, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);
  return (
    <section className="my-blogs">
      <PageHeader text={"My Blogs"} />
    </section>
  );
};

export default MyBlogs;
