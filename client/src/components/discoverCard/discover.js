import React from "react";
import "./discover.css"; // Import the corresponding CSS file
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const DiscoverCard = ({
  planetName,
  subtext,
  subsubtext,
  MyBackgroundImage,
}) => {
  return (
    <Link to={`/planet/${planetName}`}>
      <div className="dis">
        <div
          className="img-container-dis"
          style={{ backgroundImage: `url(${MyBackgroundImage})` }}
        ></div>
        <div className="fading-image-dis">
          <div className="text">{planetName}</div>
          <div className="sub-text">{subtext}</div>
          <div className="sub-sub-text">{subsubtext}</div>
        </div>
      </div>
    </Link>
  );
};

export default DiscoverCard;
