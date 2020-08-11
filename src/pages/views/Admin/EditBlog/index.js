import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import firebase from "../../../../firebase";

const EditBlog = ({ blogs, onUpdateBlog }) => {
  let { id } = useParams();
  let history = useHistory();
  const blog = blogs.find((blog) => blog.id === id);

  const [currentBlog, setCurrentBlog] = useState(blog);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(currentblog);
    onUpdateBlog(currentBlog);
    history.push("/admin/blogs");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      // console.log(e.target.files[0]);
      let file = e.target.files[0];
      let storageRef = firebase.storage().ref(`images/blogs/${file.name}`);
      storageRef.put(file).then(function () {
        storageRef.getDownloadURL().then((url) => {
          setCurrentBlog({
            ...currentBlog,
            [name]: url,
          });
        });
      });
    } else {
      setCurrentBlog({
        ...currentBlog,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="section-title">
                <h4>Update blog</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <form action="" onSubmit={onHandleSubmit} className="w-75">
                <div className="form-group">
                  <label htmlFor="blogTitle">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={currentBlog.title}
                    onChange={onHandleChange}
                    className="form-control"
                    id="blogTitle"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogContent">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="content"
                    value={currentBlog.content}
                    onChange={onHandleChange}
                    className="form-control"
                    id="blogContent"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogAuthor">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={currentBlog.author}
                    onChange={onHandleChange}
                    className="form-control"
                    id="blogAuthor"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogImage">Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={onHandleChange}
                    className="form-control"
                    id="blogImage"
                    aria-describedby="imageHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blogDatePublished">Date Published</label>
                  <input
                    type="date"
                    name="date"
                    value={currentBlog.date}
                    onChange={onHandleChange}
                    className="form-control"
                    id="blogDatePublished"
                    aria-describedby="dateHelp"
                  />
                </div>
                <button className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EditBlog.propTypes = {};

export default EditBlog;
