import React from "react";
import "./discover.css"; // Import the corresponding CSS file
const DiscoverCard = ({
  text,
  subtext,
  subsubtext,
  subsubsubtext,
  MyBackgroundImage,
}) => {
  return (
    <div className="discover-container">
      <div className="dis">
        <div
          className="img-container-dis"
          style={{
            backgroundImage: `url(${MyBackgroundImage})`,
          }}
        ></div>
        <div className="fading-image-dis">
          <div className="text">{text}</div>
          <div className="sub-text">{subtext}</div>
          <div className="sub-sub-text">{subsubtext}</div>
          <div className="sub-sub-sub-text">{subsubsubtext}</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
