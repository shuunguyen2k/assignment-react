import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LayoutAdmin from "../pages/layouts/LayoutAdmin";
import LayoutMain from "../pages/layouts/LayoutMain";

import Dashboard from "../pages/views/Admin/Dashboard";
import Products from "../pages/views/Admin/Products";
import AddProduct from "../pages/views/Admin/AddProduct";
import EditProduct from "../pages/views/Admin/EditProduct";
import Blogs from "../pages/views/Admin/Blogs";
import AddBlog from "../pages/views/Admin/AddBlog";
import EditBlog from "../pages/views/Admin/EditBlog";
import Brands from "../pages/views/Admin/Brands";
import AddBrand from "../pages/views/Admin/AddBrand";
import EditBrand from "../pages/views/Admin/EditBrand";
import Order from "../pages/views/Admin/Order";

import Home from "../pages/views/Main/Home";
import Shop from "../pages/views/Main/Shop";
import ProductDetails from "../pages/views/Main/ProductDetails";
import ShopCart from "../pages/views/Main/ShopCart";
import CheckOut from "../pages/views/Main/CheckOut";
import Blog from "../pages/views/Main/Blog";
import Contact from "../pages/views/Main/Contact";
import Thanks from "../pages/views/Main/Thanks";

const Routers = ({
  products,
  brands,
  categories,
  shopCarts,
  customers,
  blogs,
  onAdd,
  onUpdate,
  onRemove,
  onAddBrand,
  onUpdateBrand,
  onRemoveBrand,
  onAddShopCart,
  onAddCustomer,
  onAddBlog,
  onUpdateBlog,
  onRemoveBlog,
}) => {
  const onHandleAdd = (product) => {
    onAdd(product);
  };
  const onHandleUpdate = (product) => {
    onUpdate(product);
  };
  const onHandleRemove = (id) => {
    onRemove(id);
  };

  const onHandleAddBrand = (brand) => {
    onAddBrand(brand);
  };
  const onHandleUpdateBrand = (brand) => {
    onUpdateBrand(brand);
  };
  const onHandleRemoveBrand = (id) => {
    onRemoveBrand(id);
  };

  const onHandleAddShopCart = (shopCart) => {
    onAddShopCart(shopCart);
  };

  const onHandleAddCustomer = (customer) => {
    onAddCustomer(customer);
  };

  const onHandleAddBlog = (blog) => {
    onAddBlog(blog);
  };
  const onHandleUpdateBlog = (blog) => {
    onUpdateBlog(blog);
  };
  const onHandleRemoveBlog = (id) => {
    onRemoveBlog(id);
  };

  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard
                  products={products}
                  blogs={blogs}
                  brands={brands}
                  categories={categories}
                  shopCarts={shopCarts}
                  customers={customers}
                />
              </Route>
              <Route
                path="/admin/products"
                render={(props) => (
                  <Products
                    {...props}
                    products={products}
                    brands={brands}
                    categories={categories}
                    onRemove={onHandleRemove}
                  />
                )}
              ></Route>
              <Route
                path="/admin/product/add"
                render={(props) => (
                  <AddProduct
                    {...props}
                    brands={brands}
                    categories={categories}
                    onAdd={onHandleAdd}
                  />
                )}
              ></Route>
              <Route
                path="/admin/product/:id"
                render={(props) => (
                  <EditProduct
                    {...props}
                    products={products}
                    brands={brands}
                    categories={categories}
                    onUpdate={onHandleUpdate}
                  />
                )}
              ></Route>
              <Route
                path="/admin/brands"
                render={(props) => (
                  <Brands
                    {...props}
                    brands={brands}
                    onRemoveBrand={onHandleRemoveBrand}
                  />
                )}
              ></Route>
              <Route
                path="/admin/brand/add"
                render={(props) => (
                  <AddBrand
                    {...props}
                    brands={brands}
                    onAddBrand={onHandleAddBrand}
                  />
                )}
              ></Route>
              <Route
                path="/admin/brand/:id"
                render={(props) => (
                  <EditBrand
                    {...props}
                    brands={brands}
                    onUpdateBrand={onHandleUpdateBrand}
                  />
                )}
              ></Route>
              <Route
                path="/admin/brand/:id"
                render={(props) => (
                  <EditBrand
                    {...props}
                    brands={brands}
                    onUpdateBrand={onHandleUpdateBrand}
                  />
                )}
              ></Route>
              <Route
                path="/admin/order"
                render={(props) => (
                  <Order
                    {...props}
                    shopCarts={shopCarts}
                    customers={customers}
                  />
                )}
              ></Route>
              <Route
                path="/admin/blogs"
                render={(props) => (
                  <Blogs
                    {...props}
                    blogs={blogs}
                    onRemoveBlog={onHandleRemoveBlog}
                  />
                )}
              ></Route>
              <Route
                path="/admin/blog/add"
                render={(props) => (
                  <AddBlog {...props} onAddBlog={onHandleAddBlog} />
                )}
              ></Route>
              <Route
                path="/admin/blog/:id"
                render={(props) => (
                  <EditBlog
                    {...props}
                    blogs={blogs}
                    onUpdateBlog={onHandleUpdateBlog}
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
                <Shop
                  products={products}
                  brands={brands}
                  categories={categories}
                />
              </Route>
              <Route path="/productDetails/:id">
                <ProductDetails
                  products={products}
                  brands={brands}
                  categories={categories}
                />
              </Route>
              <Route
                path="/shopCart"
                render={(props) => <ShopCart {...props} products={products} />}
              ></Route>
              <Route
                path="/checkOut"
                render={(props) => (
                  <CheckOut
                    {...props}
                    products={products}
                    onAddShopCart={onHandleAddShopCart}
                    onAddCustomer={onHandleAddCustomer}
                  />
                )}
              ></Route>
              <Route path="/thanks">
                <Thanks />
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
