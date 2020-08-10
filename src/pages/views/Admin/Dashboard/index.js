import React from "react";
import PropTypes from "prop-types";

const DashBoard = ({ products, blogs }) => {
  return (
    <div>
      <h3>
        <label htmlFor="" className="text-success">
          Total Product:{" "}
        </label>{" "}
        {products.length}
      </h3>
      <h3>
        <label htmlFor="" className="text-success">
          Total Blog:{" "}
        </label>{" "}
        {blogs.length}
      </h3>
    </div>
  );
};

DashBoard.propTypes = {};

export default DashBoard;
