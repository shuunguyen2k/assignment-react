import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blogs = ({ blogs, onRemoveBlog }) => {
  const removeHandle = (id) => {
    onRemoveBlog(id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-2 text-gray-800">Blog Manager</h1>
        <Link to="/admin/blog/add" className="btn btn-primary">
          Add New Blog
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col" width={360}>
                    Image
                  </th>
                  <th scope="col">Author</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{blog.title}</td>
                    <td>{blog.content}</td>
                    <td>
                      <img src={blog.image} alt="" />
                    </td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        className="btn btn-primary"
                        to={`/admin/product/${blog.id}`}
                      >
                        Edit
                      </Link>{" "}
                      &nbsp; &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => removeHandle(blog.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Blogs.propTypes = {};

export default Blogs;
