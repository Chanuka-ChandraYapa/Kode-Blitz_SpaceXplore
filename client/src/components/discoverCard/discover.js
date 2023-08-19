import React from "react";
import "./discover.css"; // Import the corresponding CSS file
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const DiscoverCard = ({ planetName }) => {
  return (
    <Link to={`/planet/${planetName}`}>
      <div className="dis">
        <div className="img-container-dis"></div>
        <div className="fading-image-dis">
          <div className="text">{planetName}</div>
        </div>
      </div>
    </Link>
  );
};

export default DiscoverCard;
