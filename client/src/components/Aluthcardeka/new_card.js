import React from "react";
import "./new_card.css";

const NewCard = ({ imageUrl, title, index }) => {
  return (
    <div className={`box ${index === 1 ? "active" : ""}`}>

        <div className="overlap-group">
          <div className="rectangle" />
          <img className="mask-group" alt="Mask group" src={imageUrl} />
          <p className="text-wrapper">{title}</p>
        </div>

    </div>
  );
};

export default NewCard;



