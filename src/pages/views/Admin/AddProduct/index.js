import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const AddProduct = ({ brands, categories, onAdd }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();

  const onHandleSubmit = (data) => {
    console.log(data.image[0]);
    let file = data.image[0];
    let storageRef = firebase.storage().ref(`images/products/${file.name}`);
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          image: url,
        };
        onAdd(newData);
        history.push("/admin/products");
      });
    });
  };
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
                <label htmlFor="productBrandId">
                  Brand<span className="text-danger">*</span>
                </label>
                <select
                  name="brandId"
                  className="form-control"
                  id="productBrandId"
                  ref={register}
                  aria-describedby="brandIdHelp"
                >
                  {brands.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
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
                  step={0.01}
                  name="salePrice"
                  className="form-control"
                  id="productSalePrice"
                  ref={register}
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="productDescription">Description</label>
                <textarea
                  type="text"
                  rows={7}
                  name="description"
                  className="form-control"
                  id="productDescription"
                  ref={register({ required: true })}
                  aria-describedby="descriptionHelp"
                />
                <small id="descriptionHelp" className="form-text text-danger">
                  {errors.description && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productCategoryId">Category</label>
                <span className="text-danger">*</span>
                <select
                  name="categoryId"
                  className="form-control"
                  id="productCategoryId"
                  ref={register}
                  aria-describedby="categoryIdHelp"
                >
                  {categories.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
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
              <div className="form-group">
                <label htmlFor="productAvailability">
                  Availability<span className="text-danger">*</span>
                </label>{" "}
                <br />
                <div className="form-group">
                  <label htmlFor="">Yes</label> &nbsp;
                  <input
                    type="radio"
                    name="availability"
                    // className="form-control"
                    id="productAvailability"
                    value="True"
                    defaultChecked
                    ref={register}
                    aria-describedby="availabilityHelp"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <label htmlFor="">No</label> &nbsp;
                  <input
                    type="radio"
                    name="availability"
                    // className="form-control"
                    id="productAvailability"
                    value="False"
                    ref={register}
                    aria-describedby="availabilityHelp"
                  />
                </div>
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
