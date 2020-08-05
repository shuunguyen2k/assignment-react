import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Shop = ({ products }) => {
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
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Shop Section Begin */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="shop__sidebar">
                <div className="sidebar__categories">
                  <div className="section-title">
                    <h4>Categories</h4>
                  </div>
                  <div className="categories__accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-heading active">
                          <Link
                            to="#"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                          >
                            Women
                          </Link>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul>
                              <li>
                                <Link to="#">Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets</Link>
                              </li>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Shirts</Link>
                              </li>
                              <li>
                                <Link to="#">T-shirts</Link>
                              </li>
                              <li>
                                <Link to="#">Jeans</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <Link
                            to="#"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                          >
                            Men
                          </Link>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul>
                              <li>
                                <Link to="#">Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets</Link>
                              </li>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Shirts</Link>
                              </li>
                              <li>
                                <Link to="#">T-shirts</Link>
                              </li>
                              <li>
                                <Link to="#">Jeans</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <Link
                            to="#"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          >
                            Kids
                          </Link>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul>
                              <li>
                                <Link to="#">Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets</Link>
                              </li>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Shirts</Link>
                              </li>
                              <li>
                                <Link to="#">T-shirts</Link>
                              </li>
                              <li>
                                <Link to="#">Jeans</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <Link
                            to="#"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                          >
                            Accessories
                          </Link>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul>
                              <li>
                                <Link to="#">Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets</Link>
                              </li>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Shirts</Link>
                              </li>
                              <li>
                                <Link to="#">T-shirts</Link>
                              </li>
                              <li>
                                <Link to="#">Jeans</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-heading">
                          <Link
                            to="#"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                          >
                            Cosmetic
                          </Link>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <ul>
                              <li>
                                <Link to="#">Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets</Link>
                              </li>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Shirts</Link>
                              </li>
                              <li>
                                <Link to="#">T-shirts</Link>
                              </li>
                              <li>
                                <Link to="#">Jeans</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__filter">
                  <div className="section-title">
                    <h4>Shop by price</h4>
                  </div>
                  <div className="filter-range-wrap">
                    <div
                      className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min={33}
                      data-max={99}
                    />
                    <div className="range-slider">
                      <div className="price-input">
                        <p>Price:</p>
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>
                  </div>
                  <Link to="#">Filter</Link>
                </div>
                <div className="sidebar__sizes">
                  <div className="section-title">
                    <h4>Shop by size</h4>
                  </div>
                  <div className="size__list">
                    <label htmlFor="xxs">
                      xxs
                      <input type="checkbox" id="xxs" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="xs">
                      xs
                      <input type="checkbox" id="xs" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="xss">
                      xs-s
                      <input type="checkbox" id="xss" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="s">
                      s
                      <input type="checkbox" id="s" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="m">
                      m
                      <input type="checkbox" id="m" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="ml">
                      m-l
                      <input type="checkbox" id="ml" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="l">
                      l
                      <input type="checkbox" id="l" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="xl">
                      xl
                      <input type="checkbox" id="xl" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="sidebar__color">
                  <div className="section-title">
                    <h4>Shop by size</h4>
                  </div>
                  <div className="size__list color__list">
                    <label htmlFor="black">
                      Blacks
                      <input type="checkbox" id="black" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="whites">
                      Whites
                      <input type="checkbox" id="whites" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="reds">
                      Reds
                      <input type="checkbox" id="reds" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="greys">
                      Greys
                      <input type="checkbox" id="greys" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="blues">
                      Blues
                      <input type="checkbox" id="blues" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="beige">
                      Beige Tones
                      <input type="checkbox" id="beige" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="greens">
                      Greens
                      <input type="checkbox" id="greens" />
                      <span className="checkmark" />
                    </label>
                    <label htmlFor="yellows">
                      Yellows
                      <input type="checkbox" id="yellows" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="row">
                {products.map(({ id, name, image, price }, index) => (
                  // brand,
                  // description,
                  // availability,
                  // availableColor,
                  // availableSize,
                  // promotions
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{
                          backgroundImage: `url(${image})`
                        }}
                      >
                        {/* <div className="label new">New</div> */}
                        <ul className="product__hover">
                          <li>
                            <Link
                              to="img/shop/shop-1.jpg"
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
                          <Link to={`/productDetails/${id}`}>{name}</Link>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product__price">$ {price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Section End */}
    </div>
  );
};

Shop.propTypes = {};

export default Shop;
