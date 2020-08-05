import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src={require("../../../assets/img/logo.png")} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <nav className="header__menu">
              <ul>
                {/* <li className="active"> */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Women’s</Link>
                </li>
                <li>
                  <Link to="#">Men’s</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="#">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/shopCart">Shop Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkOut">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/blogDetails">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                <Link to="/admin">Login</Link>
                <Link to="/admin">Register</Link>
              </div>
              <ul className="header__right__widget">
                <li>
                  <span className="icon_search search-switch" />
                </li>
                <li>
                  <Link to="#">
                    <span className="icon_heart_alt" />
                    <div className="tip">2</div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon_bag_alt" />
                    <div className="tip">2</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
