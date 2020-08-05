import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

const EditProduct = ({ products, onUpdate }) => {
  const { register, handleSubmit, errors } = useForm();
  let { id } = useParams();
  let history = useHistory();
  const product = products.find((product) => product.id === id);

  const [currentProduct, setCurrentProduct] = useState(product);

  const onHandleSubmit = () => {
    onUpdate(currentProduct);
    history.push("/admin/products");
    window.alert("Update successfully!!");
    
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };
  return (
    <div>
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="section-title">
                <h4>Update Product</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <form
                action=""
                onSubmit={handleSubmit(onHandleSubmit)}
                className="w-75"
              >
                <div className="form-group">
                  <label htmlFor="productName">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={currentProduct.name}
                    onChange={onHandleChange}
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
                    value={currentProduct.brand}
                    onChange={onHandleChange}
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
                    value={currentProduct.description}
                    onChange={onHandleChange}
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
                    value={currentProduct.price}
                    onChange={onHandleChange}
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
                    value={currentProduct.availability}
                    onChange={onHandleChange}
                    className="form-control"
                    id="productAvailability"
                    ref={register({ required: true })}
                    aria-describedby="availabilityHelp"
                  />
                  <small
                    id="availabilityHelp"
                    className="form-text text-danger"
                  >
                    {errors.availability && <span>This field is required</span>}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="productAvailableColor">Available Color</label>
                  <input
                    type="text"
                    name="availableColor"
                    value={currentProduct.availableColor}
                    onChange={onHandleChange}
                    className="form-control"
                    id="productAvailableColor"
                    ref={register({ required: true })}
                    aria-describedby="availableColorHelp"
                  />
                  <small
                    id="availableColorHelp"
                    className="form-text text-danger"
                  >
                    {errors.availableColor && (
                      <span>This field is required</span>
                    )}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="productAvailableSize">Available Size</label>
                  <input
                    type="text"
                    name="availableSize"
                    value={currentProduct.availableSize}
                    onChange={onHandleChange}
                    className="form-control"
                    id="productAvailableSize"
                    ref={register({ required: true })}
                    aria-describedby="availableSizeHelp"
                  />
                  <small
                    id="availableSizeHelp"
                    className="form-text text-danger"
                  >
                    {errors.availableSize && (
                      <span>This field is required</span>
                    )}
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="productPromotions">Promotions</label>
                  <input
                    type="text"
                    name="promotions"
                    value={currentProduct.promotions}
                    onChange={onHandleChange}
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

                <button className="btn btn-primary">Cập nhật</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EditProduct.propTypes = {
  products: PropTypes.array,
};

export default EditProduct;
