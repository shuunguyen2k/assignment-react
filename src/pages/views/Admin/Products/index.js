import React from "react";
import PropTypes from "prop-types";
import { Link  } from "react-router-dom";

const Products = ({ products, onRemove }) => {
  console.log(products);
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
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col" width="170"></th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  (
                    {
                      id,
                      name,
                      brand,
                      image,
                      description,
                      price,
                      availability,
                      availableColor,
                      availableSize,
                      promotions,
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{name}</td>
                      <td>{brand}</td>
                      <td>
                        <img
                          src={require("../../../../assets/img/shop/shop-1.jpg")}
                          alt=""
                          width="50"
                        />
                      </td>
                      <td>{price}</td>
                      <td>
                        <Link className="btn btn-primary" to={`/admin/product/${id}`}>
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
