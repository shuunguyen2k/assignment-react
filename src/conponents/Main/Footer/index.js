import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>
      {/* Instagram Begin */}
      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-1.jpg?alt=media&token=ca9a9c02-b807-4b0a-bc3d-288dd46d8500)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-2.jpg?alt=media&token=ab5fa0c5-c3c6-418f-9ee1-a821f80d261f)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-3.jpg?alt=media&token=d8263908-b986-4f78-8aa0-feca8b7570ff)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-4.jpg?alt=media&token=25b4e168-cab6-495d-bb3c-5498f301c2ba)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-5.jpg?alt=media&token=cd1347ce-8f7f-4fdc-81fb-86eb334fef27)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Finstagram%2Finsta-6.jpg?alt=media&token=8f462a23-dd45-4b33-89ae-499854b2d77e)",
                }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram" />
                  <a href="#">@ ashion_shop</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Instagram End */}

      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="./index.html">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/react-basic-1d16b.appspot.com/o/images%2Flogo.png?alt=media&token=a504d96d-580b-4340-90f2-956e1452b6f6"
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt cilisis.
                </p>
                <div className="footer__payment">
                  <a href="#">
                    <img
                      src={require("../../../assets/img/payment/payment-1.png")}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/payment/payment-2.png")}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/payment/payment-3.png")}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/payment/payment-4.png")}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={require("../../../assets/img/payment/payment-5.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="#">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <div className="footer__copyright__text">
                <p>
                  Copyright © All rights reserved | This website is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  {/* <a href="https://colorlib.com" target="_blank"> */}
                  Shuu128
                  {/* </a> */}
                </p>
              </div>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
