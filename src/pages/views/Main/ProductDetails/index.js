import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = ({ products, brands, categories }) => {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);
  console.log(product);
  return (
    <div>
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
                  <Link to="/shop">Shop</Link>
                  <span>{product.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Product Details Section Begin */}
        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__left product__thumb nice-scroll">
                    {/* <Link className="pt active" to="#product-1">
                      <img src="img/product/details/thumb-1.jpg" alt="" />
                    </Link> */}
                    <Link className="pt" to="#product-2">
                      <img src="img/product/details/thumb-2.jpg" alt="" />
                    </Link>
                    <Link className="pt" to="#product-3">
                      <img src="img/product/details/thumb-3.jpg" alt="" />
                    </Link>
                    <Link className="pt" to="#product-4">
                      <img src="img/product/details/thumb-4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="product__details__slider__content">
                    <div className="product__details__pic__slider owl-carousel">
                      <img
                        // data-hash="product-1"
                        className="product__big__img"
                        src={product.image}
                        alt=""
                        width={413}
                        height={550}
                      />
                      {/* <img
                        data-hash="product-2"
                        className="product__big__img"
                        src="img/product/details/product-3.jpg"
                        alt=""
                      />
                      <img
                        data-hash="product-3"
                        className="product__big__img"
                        src="img/product/details/product-2.jpg"
                        alt=""
                      />
                      <img
                        data-hash="product-4"
                        className="product__big__img"
                        src="img/product/details/product-4.jpg"
                        alt=""
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details__text">
                  <h3>
                    {product.name}{" "}
                    <span>
                      Brand: &nbsp;
                      {brands.map(({ id, name }) => {
                        if (id === product.brandId) return name;
                      })}
                    </span>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <span>( 138 reviews )</span>
                  </div>
                  <div className="product__details__price">
                    $ {product.salePrice}
                    <span>$ {product.regularPrice}</span>
                  </div>
                  <p>{product.description}</p>
                  <div className="product__details__button">
                    <div className="quantity">
                      <span>Quantity:</span>
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                    <Link to="/shopCart" className="cart-btn">
                      <span className="icon_bag_alt" /> Add to cart
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_adjust-horiz" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__details__widget">
                    <ul>
                      <li>
                        <span>Availability:</span>
                        <div className="stock__checkbox">
                          <label htmlFor="stockin">
                            In Stock
                            <input
                              type="checkbox"
                              id="stockin"
                              checked={true}
                            />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <span>Available color:</span>
                        <div className="color__checkbox">
                          <label htmlFor="red">
                            <input
                              type="radio"
                              name="color__radio"
                              id="red"
                              defaultChecked
                            />
                            <span className="checkmark" />
                          </label>
                          <label htmlFor="black">
                            <input
                              type="radio"
                              name="color__radio"
                              id="black"
                            />
                            <span className="checkmark black-bg" />
                          </label>
                          <label htmlFor="grey">
                            <input type="radio" name="color__radio" id="grey" />
                            <span className="checkmark grey-bg" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <span>Available size:</span>
                        <div className="size__btn">
                          <label htmlFor="xs-btn" className="active">
                            <input type="radio" id="xs-btn" />
                            xs
                          </label>
                          <label htmlFor="s-btn">
                            <input type="radio" id="s-btn" />s
                          </label>
                          <label htmlFor="m-btn">
                            <input type="radio" id="m-btn" />m
                          </label>
                          <label htmlFor="l-btn">
                            <input type="radio" id="l-btn" />l
                          </label>
                        </div>
                      </li>
                      <li>
                        <span>Promotions:</span>
                        <p>{product.promotions}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product__details__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-toggle="tab"
                        to="#tabs-1"
                        role="tab"
                      >
                        Description
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#tabs-2"
                        role="tab"
                      >
                        Specification
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-toggle="tab"
                        to="#tabs-3"
                        role="tab"
                      >
                        Reviews ( 2 )
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <h6>Description</h6>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut loret fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt loret.
                        Neque porro lorem quisquam est, qui dolorem ipsum quia
                        dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut loret fugit, sed quia ipsu
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Nulla consequat massa quis enim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem.
                      </p>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                      <h6>Specification</h6>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut loret fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt loret.
                        Neque porro lorem quisquam est, qui dolorem ipsum quia
                        dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut loret fugit, sed quia ipsu
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Nulla consequat massa quis enim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem.
                      </p>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                      <h6>Reviews ( 2 )</h6>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut loret fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt loret.
                        Neque porro lorem quisquam est, qui dolorem ipsum quia
                        dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut loret fugit, sed quia ipsu
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Nulla consequat massa quis enim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="related__title">
                  <h5>RELATED PRODUCTS</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/img/product/related/rp-1.jpg") +
                        ")",
                    }}
                  >
                    <div className="label new">New</div>
                    <ul className="product__hover">
                      <li>
                        <Link
                          to="img/product/related/rp-1.jpg"
                          className="image-popup"
                        >
                          <span className="arrow_expand" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_bag_alt" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <Link to="#">Buttons tweed blazer</Link>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/img/product/related/rp-2.jpg") +
                        ")",
                    }}
                  >
                    <ul className="product__hover">
                      <li>
                        <Link
                          to="img/product/related/rp-2.jpg"
                          className="image-popup"
                        >
                          <span className="arrow_expand" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_bag_alt" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <Link to="#">Flowy striped skirt</Link>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 49.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/img/product/related/rp-3.jpg") +
                        ")",
                    }}
                  >
                    <div className="label stockout">out of stock</div>
                    <ul className="product__hover">
                      <li>
                        <Link
                          to="img/product/related/rp-3.jpg"
                          className="image-popup"
                        >
                          <span className="arrow_expand" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_bag_alt" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <Link to="#">Cotton T-Shirt</Link>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/img/product/related/rp-4.jpg") +
                        ")",
                    }}
                  >
                    <ul className="product__hover">
                      <li>
                        <Link
                          to="img/product/related/rp-4.jpg"
                          className="image-popup"
                        >
                          <span className="arrow_expand" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_heart_alt" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon_bag_alt" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <Link to="#">Slim striped pocket shirt</Link>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Details Section End */}
      </div>
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
