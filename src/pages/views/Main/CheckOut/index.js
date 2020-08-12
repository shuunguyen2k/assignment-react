import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CheckOut = ({ products, onAddShopCart, onAddCustomer }) => {
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  let history = useHistory();

  const onHandleSubmit = (data) => {
    const id = Math.random().toString(36).substr(2, 9);

    // console.log({ id, ...data });
    // console.log({ id, shopCarts });
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    onAddShopCart({ id, date, shopCarts });
    onAddCustomer({ id, ...data });
    localStorage.clear();
    history.push("/thanks");
  };

  const arr = [];
  for (var i = 0; i < localStorage.length; i++) {
    products.map((product) => {
      if (product.id === localStorage.key(i)) {
        product = {
          ...product,
          quantity: localStorage.getItem(localStorage.key(i)),
        };
        arr.push(product);
      }
    });
  }
  const [shopCarts, setshopCarts] = useState(arr);

  let subTotal = shopCarts.reduce((total, product) => {
    return (total += product.salePrice * product.quantity);
  }, 0);

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
                <span>Check Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Checkout Section Begin */}
      <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6 className="coupon__link">
                <span className="icon_tag_alt" />{" "}
                <Link to="#">Have a coupon?</Link> Click here to enter your
                code.
              </h6>
            </div>
          </div>
          <form
            action=""
            className="checkout__form"
            onSubmit={handleSubmit(onHandleSubmit)}
          >
            <div className="row">
              <div className="col-lg-8">
                <h5>Billing detail</h5>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="cusFirstname">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        id="cusFirstname"
                        ref={register({
                          required: true,
                          pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                        })}
                        aria-describedby="firstnameHelp"
                      />
                      <small
                        id="firstnameHelp"
                        className="form-text text-danger"
                      >
                        {errors.firstname &&
                          errors.firstname.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.firstname &&
                          errors.firstname.type === "pattern" && (
                            <span>This field is pattern</span>
                          )}
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="cusLastname">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        id="cusLastname"
                        ref={register({
                          required: true,
                          pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                        })}
                        aria-describedby="lastnameHelp"
                      />
                      <small
                        id="lastnameHelp"
                        className="form-text text-danger"
                      >
                        {errors.lastname &&
                          errors.lastname.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.lastname &&
                          errors.lastname.type === "pattern" && (
                            <span>This field is pattern</span>
                          )}
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="cusCountry">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        name="country"
                        className="form-control"
                        id="cusCountry"
                        ref={register}
                        aria-describedby="countryHelp"
                      >
                        <option value="VN">Viet Nam</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cusCity">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        name="city"
                        className="form-control"
                        id="cusCity"
                        ref={register}
                        aria-describedby="cityHelp"
                      >
                        <option value="HN">Ha Noi</option>
                        <option value="HP">Hai Phong</option>
                        <option value="DN">Da Nang</option>
                        <option value="HCM">Ho Chi Minh</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cusAddress">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        className="form-control"
                        id="cusAddress"
                        ref={register({
                          required: true,
                          pattern: /^[\w\d-]+[\w\d\s-]*$/i,
                        })}
                        aria-describedby="addressHelp"
                      />
                      <small id="addressHelp" className="form-text text-danger">
                        {errors.address &&
                          errors.address.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.address &&
                          errors.address.type === "pattern" && (
                            <span>This field is pattern</span>
                          )}
                      </small>
                    </div>
                    {/* <div className="checkout__form__input">
                      <p>
                        Address <span>*</span>
                      </p>
                      <input type="text" placeholder="Street Address" />
                      <input
                        type="text"
                        placeholder="Apartment. suite, unite ect ( optinal )"
                      />
                    </div> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="cusPhone">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="cusPhone"
                        ref={register({
                          required: true,
                          pattern: /^0[0-9]{9}$/i,
                        })}
                        aria-describedby="phoneHelp"
                      />
                      <small id="phoneHelp" className="form-text text-danger">
                        {errors.phone && errors.phone.type === "required" && (
                          <span>This field is required</span>
                        )}
                        {errors.phone && errors.phone.type === "pattern" && (
                          <span>This field is pattern</span>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="cusEmail">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="cusEmail"
                        ref={register({
                          required: true,
                          pattern: /^\w+@gmail.com$/i,
                        })}
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-danger">
                        {errors.email && errors.email.type === "required" && (
                          <span>This field is required</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <span>This field is pattern</span>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* <div className="checkout__form__checkbox">
                      <label htmlFor="acc">
                        Create an acount?
                        <input type="checkbox" id="acc" />
                        <span className="checkmark" />
                      </label>
                      <p>
                        Create am acount by entering the information below. If
                        you are a returing customer login at the <br />
                        top of the page
                      </p>
                    </div>
                    <div className="checkout__form__input">
                      <p>
                        Account Password <span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__form__checkbox">
                      <label htmlFor="note">
                        Note about your order, e.g, special noe for delivery
                        <input type="checkbox" id="note" />
                        <span className="checkmark" />
                      </label>
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="cusNote">Oder notes</label>
                      <input
                        type="text"
                        name="note"
                        placeholder="Note about your order, e.g, special noe for delivery"
                        className="form-control"
                        id="cusEmail"
                        ref={
                          register()
                          // { pattern: /^\w$/i }
                        }
                        aria-describedby="noteHelp"
                      />
                      {/* <small id="noteHelp" className="form-text text-danger">
                        {errors.note && errors.note.type === "pattern" && (
                          <span>This field is pattern</span>
                        )}
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="checkout__order">
                  <h5>Your order</h5>
                  <div className="checkout__order__product">
                    <ul>
                      <li>
                        <span className="top__text">Product</span>
                        <span className="top__text__right">Total</span>
                      </li>
                      {shopCarts.map((product, index) => (
                        <li key={index}>
                          0{index + 1}. {product.name} x {product.quantity}{" "}
                          <span>
                            ${" "}
                            {(product.salePrice * product.quantity).toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="checkout__order__total">
                    <ul>
                      <li>
                        Subtotal <span>$ {subTotal}</span>
                      </li>
                      <li>
                        Total <span>$ {subTotal}</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="checkout__order__widget">
                    <label htmlFor="o-acc">
                      Create an acount?
                      <input type="checkbox" id="o-acc" />
                      <span className="checkmark" />
                    </label>
                    <p>
                      Create am acount by entering the information below. If you
                      are a returing customer login at the top of the page.
                    </p>
                    <label htmlFor="check-payment">
                      Cheque payment
                      <input type="checkbox" id="check-payment" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="paypal">
                      PayPal
                      <input type="checkbox" id="paypal" />
                      <span className="checkmark" />
                    </label>
                  </div> */}
                  <button type="submit" className="site-btn">
                    Place oder
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Checkout Section End */}
    </div>
  );
};

CheckOut.propTypes = {};

export default CheckOut;
