import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thanks = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Order successfully!!</h1>
      {/* <div className="col-lg-6 col-md-6 col-sm-6"> */}
      <div className="cart__btn">
        <Link to="/shop">Continue Shopping</Link>
      </div>
      {/* </div> */}
    </div>
  );
};

Thanks.propTypes = {};

export default Thanks;
