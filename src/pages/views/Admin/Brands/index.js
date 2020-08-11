import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brands, onRemoveBrand }) => {
  const removeHandle = (id) => {
    onRemoveBrand(id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-2 text-gray-800">Brand Manager</h1>
        <Link to="/admin/brand/add" className="btn btn-primary">
          Add New Brand
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col" width={360}>
                    Image
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{brand.name}</td>

                    <td>
                      <img src={brand.image} alt="" />
                    </td>

                    <td style={{ textAlign: "center" }}>
                      <Link
                        className="btn btn-primary"
                        to={`/admin/brand/${brand.id}`}
                      >
                        Edit
                      </Link>{" "}
                      &nbsp; &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => removeHandle(brand.id)}
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

Brands.propTypes = {};

export default Brands;
