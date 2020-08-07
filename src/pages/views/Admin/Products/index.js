import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ products, brands, onRemove }) => {
  const removeHandle = (id) => {
    onRemove(id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
        <Link to="/admin/product/add" className="btn btn-primary">
          Add New Product
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">#</th>
                  <th scope="col">SKU</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Regular Price</th>
                  <th scope="col">Sale Price</th>
                  <th scope="col">Description</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Image</th>
                  <th scope="col">Gallery</th>
                  <th scope="col">Availability</th>
                  <th scope="col" width="170">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.SKU}</td>
                    <td>{product.name}</td>
                    <td>
                      {brands.find((brand) => brand.id === product.brandId)}
                    </td>
                    <td>{product.regularPrice}</td>
                    <td>{product.salePrice}</td>
                    <td>{product.description}</td>
                    <td>{product.categoriesId}</td>
                    <td>
                      <img src={product.image} alt="" width={50} />
                    </td>
                    <td>{product.gallery}</td>
                    <td>{product.availability}</td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/admin/product/${product.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger ml-3"
                        onClick={() => removeHandle(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
