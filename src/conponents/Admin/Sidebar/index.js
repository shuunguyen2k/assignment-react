import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/admin"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to="/admin">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/products">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Product Manager</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <Link to="/">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </Link>
      </div>
    </ul>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
