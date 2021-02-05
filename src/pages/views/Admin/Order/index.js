import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Order = ({ shopCarts, customers }) => {
  console.log(shopCarts);
  console.log(customers);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-2 text-gray-800">Order Manager</h1>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th scope="col" rowSpan={2}>
                    #
                  </th>
                  <th scope="col" rowSpan={2}>
                    ID
                  </th>
                  <th scope="col" colSpan={4}>
                    Products
                  </th>
                  <th scope="col" rowSpan={2}>
                    SubTotal
                  </th>
                  <th scope="col" rowSpan={2}>
                    Order Date
                  </th>
                  <th scope="col" colSpan={2}>
                    Orderer
                  </th>
                  <th scope="col" rowSpan={2}>
                    Action
                  </th>
                </tr>
                <tr>
                  <th scope="col" style={{ width: "56px" }}>
                    #
                  </th>
                  <th scope="col" style={{ width: "206px" }}>
                    Product SKU
                  </th>
                  <th scope="col" style={{ width: "156px" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ width: "110px" }}>
                    ToTal
                  </th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {shopCarts.map((shopCart, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{shopCart.id}</td>
                    <td colSpan={4}>
                      {shopCart.shopCarts.map((product, index) => (
                        <div key={index}>
                          <div style={{ width: "50px", float: "left" }}>
                            0{index + 1}.
                          </div>
                          <div
                            style={{
                              width: "200px",
                              float: "left",
                            }}
                          >
                            {product.SKU}
                          </div>
                          <div
                            style={{
                              width: "150px",
                              float: "left",
                            }}
                          >
                            {product.quantity}
                          </div>
                          <div
                            style={{
                              width: "100px",
                              float: "left",
                            }}
                          >
                            $ {(product.salePrice * product.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </td>
                    <td>$ {shopCart.subTotal}</td>
                    <td>{shopCart.date}</td>
                    <td>
                      {customers.map((customer) => {
                        if (customer.id === shopCart.id) {
                          return customer.lastname;
                        }
                      })}
                    </td>
                    <td>
                      {customers.map((customer) => {
                        if (customer.id === shopCart.id) {
                          return customer.phone;
                        }
                      })}
                    </td>
                    <td>
                      <Link
                        className="btn btn-primary"
                        to={`/admin/order/${shopCart.id}`}
                      >
                        Details
                      </Link>
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

Order.propTypes = {};

export default Order;
