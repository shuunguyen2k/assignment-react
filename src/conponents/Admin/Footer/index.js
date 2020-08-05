import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
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
  );
};

Footer.propTypes = {};

export default Footer;
