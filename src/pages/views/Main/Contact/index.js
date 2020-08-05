import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Contact = (props) => {
  return (
    <div>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__content">
                <div className="contact__address">
                  <h5>Contact info</h5>
                  <ul>
                    <li>
                      <h6>
                        <i className="fa fa-map-marker" /> Address
                      </h6>
                      <p>Me Tri, Nam Tu Liem, Ha Noi, Viet Nam</p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-phone" /> Phone
                      </h6>
                      <p>
                        <span>0971 617 399</span>
                        <span>0947 804 169</span>
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-headphones" /> Support
                      </h6>
                      <p>doanalhp1234@gmail.com</p>
                    </li>
                  </ul>
                </div>
                <div className="contact__form">
                  <h5>SEND MESSAGE</h5>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Website" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29797.93287665446!2d105.76157216952885!3d21.00299235158427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134535103d68d8d%3A0x12421609bea07753!2zTeG7hSBUcsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1596267238067!5m2!1svi!2s"
                  height={780}
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
