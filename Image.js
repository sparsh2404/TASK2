import React from "react";
import "./Image.css";

const Image = ({ imageObject }) => {
  return (
    <div className={"image-container"}>
      <div className="image">
        <img src={imageObject.urls} alt={imageObject.author} />
      </div>
      <div className="image-details">
        {imageObject.author}
      </div>
    </div>
  );
};

export default Image;
