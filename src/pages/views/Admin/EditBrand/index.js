import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import firebase from "../../../../firebase";

const EditBrand = ({ brands, onUpdateBrand }) => {
  let { id } = useParams();
  let history = useHistory();
  const brand = brands.find((brand) => brand.id === id);

  const [currentBrand, setCurrentBrand] = useState(brand);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log(currentBrand);
    onUpdateBrand(currentBrand);
    history.push("/admin/brands");
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      // console.log(e.target.files[0]);
      let file = e.target.files[0];
      let storageRef = firebase.storage().ref(`images/brands/${file.name}`);
      storageRef.put(file).then(function () {
        storageRef.getDownloadURL().then((url) => {
          setCurrentBrand({
            ...currentBrand,
            [name]: url,
          });
        });
      });
    } else {
      setCurrentBrand({
        ...currentBrand,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="section-title">
                <h4>Update Brand</h4>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <form action="" onSubmit={onHandleSubmit} className="w-75">
                <div className="form-group">
                  <label htmlFor="productName">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={currentBrand.name}
                    onChange={onHandleChange}
                    className="form-control"
                    id="productName"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productImage">Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={onHandleChange}
                    className="form-control"
                    id="productImage"
                    aria-describedby="imageHelp"
                  />
                </div>
                <button className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EditBrand.propTypes = {};

export default EditBrand;
