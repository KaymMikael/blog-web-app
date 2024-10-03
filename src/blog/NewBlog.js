import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const NewBlog = () => {
  return (
    <section className="new-post">
      <PageHeader text={"New Blog"} />
      <div className="tab-content">
        <form>
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
            />
            {/* error Message */}
            <p className="form-message mt-1"></p>
          </div>
          <button type="submit" className="btn btn-primary mb-4 w-100 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewBlog;
