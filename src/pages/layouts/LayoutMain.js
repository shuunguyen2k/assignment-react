import React from "react";
import PropTypes from "prop-types";
import Header from "../../conponents/Main/Header";
import Footer from "../../conponents/Main/Footer";

import "../../assets/css/Main/main.scss";
import "../../assets/css/elegant-icons.scss";
import "../../assets/css/font-awesome.min.scss";

const LayoutMain = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

LayoutMain.propTypes = {};

export default LayoutMain;
