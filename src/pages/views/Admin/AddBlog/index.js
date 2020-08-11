import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const AddBlog = ({ onAddBlog }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();

  const onHandleSubmit = (data) => {
    // console.log(data.image[0]);
    let file = data.image[0];
    let storageRef = firebase.storage().ref(`images/blogs/${file.name}`);
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          image: url,
        };
        // console.log(newData)
        onAddBlog(newData);
        history.push("/admin/blogs");
      });
    });
  };
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="section-title">
              <h4>Add blog</h4>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <form
              action=""
              className="w-75"
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className="form-group">
                <label htmlFor="blogTitle">
                  Title<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="blogTitle"
                  ref={register({
                    required: true,
                    pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                  })}
                  aria-describedby="titleHelp"
                />
                <small id="titleHelp" className="form-text text-danger">
                  {errors.title && errors.title.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.title && errors.title.type === "pattern" && (
                    <span>This field is pattern</span>
                  )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="blogContent">
                  Content<span className="text-danger">*</span>
                </label>
                <textarea
                  type="text"
                  rows={7}
                  name="content"
                  className="form-control"
                  id="productDescription"
                  ref={register({ required: true })}
                  aria-describedby="contentHelp"
                />
                <small id="contentHelp" className="form-text text-danger">
                  {errors.content && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="blogAuthor">
                  Author<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  id="blogAuthor"
                  ref={register({
                    required: true,
                    pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                  })}
                  aria-describedby="authorHelp"
                />
                <small id="authorHelp" className="form-text text-danger">
                  {errors.author && errors.author.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.author && errors.author.type === "pattern" && (
                    <span>This field is pattern</span>
                  )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="blogImage">
                  Image<span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  id="blogImage"
                  ref={register({ required: true })}
                  aria-describedby="imageHelp"
                />
                <small id="imageHelp" className="form-text text-danger">
                  {errors.image && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="blogDatePublished">Date Published</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="blogDatePublished"
                  ref={register({ required: true })}
                  aria-describedby="dateHelp"
                />
                <small id="dateHelp" className="form-text text-danger">
                  {errors.date && <span>This field is required</span>}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddBlog.propTypes = {};

export default AddBlog;
