import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddProduct = ({ onAdd }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();
  const onHandleSubmit = (data) => {
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    onAdd(newData);
    history.push("/admin/products");
    window.alert("Add Successfully!!");
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
                <label htmlFor="productName">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="productName"
                  ref={register({ required: true, minLength: 1 })}
                  aria-describedby="nameHelp"
                />
                <small id="nameHelp" className="form-text text-danger">
                  {errors.name && errors.name.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <span>Min Length 10</span>
                  )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productBrand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  className="form-control"
                  id="productBrand"
                  ref={register({ required: true, minLength: 1 })}
                  aria-describedby="brandHelp"
                />
                <small id="brandHelp" className="form-text text-danger">
                  {errors.brand && errors.name.type === "required" && (
                    <span>This field is required</span>
                  )}
                  {errors.brand && errors.name.type === "minLength" && (
                    <span>Min Length 10</span>
                  )}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Image</label>
                <div className="input-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile02"
                      name="image"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile02"
                      aria-describedby="imageHelp"
                    >
                      Choose image
                    </label>
                  </div>
                </div>
                <small id="imageHelp" className="form-text text-danger">
                  {errors.image && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productDescription">Description</label>
                <textarea
                  rows="4"
                  cols="50"
                  name="description"
                  className="form-control"
                  id="productDescription"
                  ref={register({ required: true })}
                  aria-describedby="descriptionHelp"
                  //   value="Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui ratione voluptatem sequi nesciunt."
                />
                <small id="descriptionHelp" className="form-text text-danger">
                  {errors.description && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Price</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="productPrice"
                  ref={register({ required: true })}
                  aria-describedby="priceHelp"
                />
                <small id="priceHelp" className="form-text text-danger">
                  {errors.price && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productAvailability">Availability</label>
                <input
                  type="text"
                  name="availability"
                  className="form-control"
                  id="productAvailability"
                  ref={register({ required: true })}
                  aria-describedby="availabilityHelp"
                />
                <small id="availabilityHelp" className="form-text text-danger">
                  {errors.availability && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productAvailableColor">Available Color</label>
                <input
                  type="text"
                  name="availableColor"
                  className="form-control"
                  id="productAvailableColor"
                  ref={register({ required: true })}
                  aria-describedby="availableColorHelp"
                />
                <small
                  id="availableColorHelp"
                  className="form-text text-danger"
                >
                  {errors.availableColor && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productAvailableSize">Available Size</label>
                <input
                  type="text"
                  name="availableSize"
                  className="form-control"
                  id="productAvailableSize"
                  ref={register({ required: true })}
                  aria-describedby="availableSizeHelp"
                />
                <small id="availableSizeHelp" className="form-text text-danger">
                  {errors.availableSize && <span>This field is required</span>}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="productPromotions">Promotions</label>
                <input
                  type="text"
                  name="promotions"
                  className="form-control"
                  id="productPromotions"
                  ref={register({ required: true })}
                  aria-describedby="productPromotionsHelp"
                  placeholder="Free shipping"
                />
                <small
                  id="productPromotionsHelp"
                  className="form-text text-danger"
                >
                  {errors.productPromotions && (
                    <span>This field is required</span>
                  )}
                </small>
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
