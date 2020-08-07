import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const AddProduct = ({ onAdd }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();

  const onHandleSubmit = (data) => {
    // console.log(data.image[0]);
    let file = data.image[0];
    let storageRef = firebase.storage().ref(`images/products/${file.name}`);
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // const newData = {
        //   id: Math.random().toString(36).substr(2, 9),
        //   ...data,
        //   desc,
        //   image: url,
        // };
        // console.log(newData);
        // // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        // onAdd(newData);
      });
    });
  };

  // const onHandleSubmit = (data) => {
  //   const newData = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     ...data,
  //   };
  //   onAdd(newData);
  //   history.push("/admin/products");
  //   window.alert("Add Successfully!!");
  // };
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="section-title">
              <h4>Add Product</h4>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <form
              action=""
              className="w-75"
              onSubmit={handleSubmit(onHandleSubmit)}
            >
              <div className="form-group">
                <label htmlFor="productSKU">
                  SKU<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="SKU"
                  className="form-control"
                  id="productSKU"
                  ref={register({ required: true })}
                  aria-describedby="nameHelp"
                />
                <small id="nameHelp" className="form-text text-danger">
                  {errors.SKU && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productName">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="productName"
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z0-9]+[A-Za-z0-9 ]*$/i,
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
                <label htmlFor="productBrand">
                  Brand<span className="text-danger">*</span>
                </label>
                <select
                  name="brand"
                  className="form-control"
                  id="productBrand"
                  ref={register({ required: true })}
                  aria-describedby="brandHelp"
                >
                  <option value="a">a</option>
                  <option value="b">b</option>
                </select>
                <small id="brandHelp" className="form-text text-danger">
                  {errors.brand && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productRegularPrice">
                  Regular Price<span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  // min={0}
                  step={0.01}
                  defaultValue={0}
                  name="regularPrice"
                  className="form-control"
                  id="productRegularPrice"
                  ref={register({ required: true, min: 0 })}
                  aria-describedby="regularPriceHelp"
                />
                <small id="regularPriceHelp" className="form-text text-danger">
                  {errors.regularPrice &&
                    errors.regularPrice.type === "min" && (
                      <span>Value must be greater than or equal to 0</span>
                    )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productSalePrice">Sale Price</label>
                <input
                  type="number"
                  name="salePrice"
                  className="form-control"
                  id="productSalePrice"
                  // ref={register({ required: true })}
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="productDescription">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea
                  type="text"
                  rows={7}
                  name="description"
                  className="form-control"
                  id="productDescription"
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z0-9]+[A-Za-z0-9 ]*$/i,
                  })}
                  aria-describedby="descriptionHelp"
                />
                <small id="descriptionHelp" className="form-text text-danger">
                  {errors.description &&
                    errors.description.type === "required" && (
                      <span>This field is required</span>
                    )}
                  {errors.description &&
                    errors.description.type === "pattern" && (
                      <span>This field is pattern</span>
                    )}
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="productCategory">Category</label>
                <span className="text-danger">*</span>
                <select
                  name="category"
                  className="form-control"
                  id="productCategory"
                  aria-describedby="nameHelp"
                >
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="productImage">
                  Image<span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  id="productImage"
                  ref={register({ required: true })}
                  aria-describedby="imageHelp"
                />
                <small id="imageHelp" className="form-text text-danger">
                  {errors.image && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productGallery">Gallery</label>
                <input
                  type="file"
                  name="gallery"
                  multiple
                  className="form-control"
                  id="productGallery"
                  aria-describedby="galleryHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
