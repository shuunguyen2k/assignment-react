import React from "react";
import PropTypes from "prop-types";
import Topbar from "../../conponents/Admin/Topbar";
import Sidebar from "../../conponents/Admin/Sidebar";
import Footer from "../../conponents/Admin/Footer";
import "../../assets/css/Admin/admin.scss";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="admin-page">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

LayoutAdmin.propTypes = {};

export default LayoutAdmin;
