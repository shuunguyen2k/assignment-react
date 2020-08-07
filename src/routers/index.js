import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LayoutAdmin from "../pages/layouts/LayoutAdmin";
import LayoutMain from "../pages/layouts/LayoutMain";

import Dashboard from "../pages/views/Admin/Dashboard";
import Products from "../pages/views/Admin/Products";
import AddProduct from "../pages/views/Admin/AddProduct";
import EditProduct from "../pages/views/Admin/EditProduct";

import Home from "../pages/views/Main/Home";
import Shop from "../pages/views/Main/Shop";
import ProductDetails from "../pages/views/Main/ProductDetails";
import ShopCart from "../pages/views/Main/ShopCart";
import CheckOut from "../pages/views/Main/CheckOut";
import Blog from "../pages/views/Main/Blog";
import Contact from "../pages/views/Main/Contact";

const Routers = ({ products, brands, onRemove, onAdd, onUpdate }) => {
  const onHandleAdd = (product) => {
    onAdd(product);
  };

  const onHandleUpdate = (id, product) => {
    onUpdate(id, product);
  };

  const onHandleRemove = (id) => {
    onRemove(id);
  };

  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard products={products} />
              </Route>
              <Route
                path="/admin/products"
                render={(props) => (
                  <Products
                    {...props}
                    products={products}
                    brands={brands}
                    onRemove={onHandleRemove}
                  />
                )}
              ></Route>
              <Route
                path="/admin/product/add"
                render={(props) => <AddProduct {...props} onAdd={onAdd} />}
              ></Route>
              <Route
                path="/admin/product/:id"
                render={(props) => (
                  <EditProduct
                    {...props}
                    products={products}
                    onUpdate={onHandleUpdate}
                  />
                )}
              ></Route>
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route>
          <LayoutMain>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/shop">
                <Shop products={products} />
              </Route>
              <Route path="/productDetails/:id">
                <ProductDetails products={products} />
              </Route>
              <Route path="/shopCart">
                <ShopCart />
              </Route>
              <Route path="/checkOut">
                <CheckOut />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </LayoutMain>
        </Route>
      </Switch>
    </Router>
  );
};

Routers.propTypes = {};

export default Routers;
