import React from "react";

const PageHeader = ({ text }) => {
  return (
    <div className="d-flex justify-content-center">
      <h2
        className="headline border-bottom pb-2 border-2 border-primary"
        style={{ textTransform: "capitalize" }}
      >
        {text}
      </h2>
    </div>
  );
};

export default PageHeader;
