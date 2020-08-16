import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
  return (
    <div>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home" /> Home
                </a>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Blog Section Begin */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  />
                  <div className="blog__item__text">
                    <h6>
                      <Link to="#">{blog.title}</Link>
                    </h6>
                    <ul>
                      <li>
                        by <span>{blog.author}</span>
                      </li>
                      <li>{blog.date}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-12 text-center">
              <a href="#" className="primary-btn load-btn">
                Load more posts
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
