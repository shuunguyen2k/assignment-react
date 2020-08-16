import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const AddBrand = ({ onAddBrand }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();

  const onHandleSubmit = (data) => {
    // console.log(data.image[0]);
    let file = data.image[0];
    let storageRef = firebase.storage().ref(`images/brands/${file.name}`);
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          image: url,
        };
        // console.log(newData);
        onAddBrand(newData);
        history.push("/admin/brands");
      });
    });
  };
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="section-title">
              <h4>Add Brand</h4>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <form
              action=""
              className="w-75"
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className="form-group">
                <label htmlFor="brandName">
                  Title<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="brandName"
                  ref={register({
                    required: true,
                    pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                  })}
                  aria-describedby="nameHelp"
                />
                <small id="nameHelp" className="form-text text-danger">
                  {errors.name && errors.name.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.name && errors.name.type === "pattern" && (
                    <span>This field is pattern</span>
                  )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="brandImage">
                  Image<span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  id="brandImage"
                  ref={register({ required: true })}
                  aria-describedby="imageHelp"
                />
                <small id="imageHelp" className="form-text text-danger">
                  {errors.image && <span>This field is required</span>}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Add Brand
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddBrand.propTypes = {};

export default AddBrand;
