import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopCart = ({ products }) => {
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

  const onHandleChange = (e) => {};

  const onHandleRemove = (id) => {
    setshopCarts(shopCarts.filter((product) => product.id !== id));
    localStorage.removeItem(`${id}`);
  };

  const onHandleUpdate = () => {};

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
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Shop Cart Section Begin */}
      <section className="shop-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {shopCarts.map((product, index) => (
                      <tr key={index}>
                        <td className="cart__product__item">
                          <img src={product.image} alt="" width={50} />
                          <div className="cart__product__item__title">
                            <h6>{product.name}</h6>
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">$ {product.salePrice}</td>
                        <td className="cart__quantity">
                          <div className="pro-qty">
                            <input
                              type="number"
                              defaultValue={product.quantity}
                              onChange={onHandleChange}
                            />
                          </div>
                        </td>
                        <td className="cart__total">
                          $ {(product.salePrice * product.quantity).toFixed(2)}
                        </td>
                        <td className="cart__close">
                          <span
                            className="icon_close"
                            onClick={() => onHandleRemove(product.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn">
                <Link to="/shop">Continue Shopping</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn update__btn">
                <Link to="#">
                  <span className="icon_loading" /> Update cart
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="discount__content">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ {subTotal}</span>
                  </li>
                  <li>
                    Total <span>$ {subTotal}</span>
                  </li>
                </ul>
                <Link to="/checkOut" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Cart Section End */}
    </div>
  );
};

ShopCart.propTypes = {};

export default ShopCart;
