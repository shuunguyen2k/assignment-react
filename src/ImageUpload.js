import React, { useState } from "react";
import PropTypes from "prop-types";
import render from "react-dom";
import storage from "./firebase";

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const onHandleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const onHandleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      (snapshot) => {},
      (error) => {},
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={onHandleChange} />
      <button onClick={onHandleUpload}>Upload</button>
    </div>
  );
};

ImageUpload.propTypes = {};

export default ImageUpload;
