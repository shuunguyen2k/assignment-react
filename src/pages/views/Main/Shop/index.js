import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Shop = ({ products, brands, categories }) => {
  const [shops, setshops] = useState(products);
  const [breadcrumb, setBreadcrumb] = useState(
    <div className="breadcrumb__links">
      <Link to="/">
        <i className="fa fa-home" />
        Home
      </Link>
      <span>Shop</span>
    </div>
  );

  const addToCart = (product) => {
    if (typeof Storage !== "undefined") {
      if (localStorage.getItem(`${product.id}`) === null) {
        localStorage.setItem(`${product.id}`, 1);
      } else {
        localStorage.setItem(
          `${product.id}`,
          Number(localStorage.getItem(`${product.id}`)) + 1
        );
      }
      alert("Add to cart successfully!!");
    } else {
      alert("Add to cart fail!!");
    }
  };

  const onHandleClick = (category, brand) => {
    setshops(
      products.filter(
        (product) =>
          product.categoryId === category.id && product.brandId === brand.id
      )
    );
    setBreadcrumb(
      <div className="breadcrumb__links">
        <Link to="/">
          <i className="fa fa-home" />
          Home
        </Link>
        <Link to="/shop" onClick={onHandleClick3}>
          Shop
        </Link>
        <Link to="#" onClick={() => onHandleClick2(category)}>
          {category.name}
        </Link>
        <span>{brand.name}</span>
      </div>
    );
  };

  const onHandleClick2 = (category) => {
    setshops(products.filter((product) => product.categoryId === category.id));
    setBreadcrumb(
      <div className="breadcrumb__links">
        <Link to="/">
          <i className="fa fa-home" />
          Home
        </Link>
        <Link to="/shop" onClick={onHandleClick3}>
          Shop
        </Link>
        <span>{category.name}</span>
      </div>
    );
  };

  const onHandleClick3 = () => {
    setshops(products);
    setBreadcrumb(
      <div className="breadcrumb__links">
        <Link to="/">
          <i className="fa fa-home" />
          Home
        </Link>
        <span>Shop</span>
      </div>
    );
  };

  return (
    <div>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">{breadcrumb}</div>
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
                      {categories.map((category, index) => (
                        <div className="card" key={index}>
                          <div className="card-heading active">
                            <Link
                              to="#"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              onClick={() => onHandleClick2(category)}
                            >
                              {category.name}
                            </Link>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <ul>
                                {brands.map((brand, index) => (
                                  <li key={index}>
                                    <Link
                                      to="#"
                                      onClick={() =>
                                        onHandleClick(category, brand)
                                      }
                                    >
                                      {brand.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
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
                {shops.map((product, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="product__item">
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url(${product.image})` }}
                      >
                        {/* <div className="label new">New</div> */}
                        <ul className="product__hover">
                          <li>
                            <Link to="" className="image-popup">
                              <span className="arrow_expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="icon_heart_alt" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              <span
                                className="icon_bag_alt"
                                onClick={() => addToCart(product)}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <Link to={`/productDetails/${product.id}`}>
                            {product.name}
                          </Link>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product__price">
                          $ {product.salePrice}
                          <span>$ {product.regularPrice}</span>{" "}
                        </div>
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
