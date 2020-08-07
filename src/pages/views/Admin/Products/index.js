import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ products, onRemove }) => {
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
                {products.map(
                  (
                    {
                      id,
                      SKU,
                      name,
                      brandId,
                      regularPrice,
                      salePrice,
                      description,
                      categoriesId,
                      image,
                      gallery,
                      availability,
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{SKU}</td>
                      <td>{name}</td>
                      <td>{brandId}</td>
                      <td>{regularPrice}</td>
                      <td>{salePrice}</td>
                      <td>{description}</td>
                      <td>{categoriesId}</td>
                      <td><img src={image} alt="" width={50} /></td>
                      <td>{gallery}</td>
                      <td>{availability}</td>
                      <td>
                        <Link
                          className="btn btn-primary"
                          to={`/admin/product/${id}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger ml-3"
                          onClick={() => removeHandle(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
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
