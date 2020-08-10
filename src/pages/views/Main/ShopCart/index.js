import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopCart = ({ products, shopCarts }) => {
  const shopCartId = shopCarts.length - 1;
  const [shopCart, setShopCart] = useState(shopCarts[shopCartId]);

  const arr = shopCart.arrShopCart;
  

  const arr2 = arr.map(({ productId, quatity }) =>
    products.find((product) => product.id === productId)
  );

  const arr3 = arr2.map((product, index) => {
    return {...product};
  });

  console.log(arr3);

  // const [currentArrShopCart, setCurrentArrShopCart] = useState(arr);
  // console.log(arr);
  // const { id, shopCart } = shopCarts[id1];

  // const [currentShopCart, setCurrentShopCart] = useState(shopCart);
  // console.log(currentShopCart);
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
                    {arr2.map((product, index) => (
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
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        <td className="cart__total">$ 300.0</td>
                        <td className="cart__close">
                          <span className="icon_close" />
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
                <Link to="#">Continue Shopping</Link>
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
                    Subtotal <span>$ 750.0</span>
                  </li>
                  <li>
                    Total <span>$ 750.0</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn">
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
