// Card.js
import React from "react";
import "./backimage.css"; // Import the corresponding CSS file

const BackImage = ({ MyBackgroundImage }) => {
  return (
    <div>
      <div
        className="img-container"
        style={{ backgroundImage: `url(${MyBackgroundImage})` }}
      ></div>
      <div className="fading-image"></div>
    </div>
  );
};

export default BackImage;
