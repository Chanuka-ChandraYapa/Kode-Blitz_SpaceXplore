import React from "react";
import "./new_card.css";

const NewCard = ({ imageUrl, title }) => {
  return (
    <div className="box">
      <div className="overlap-group">
        <div className="rectangle" />
        <img className="mask-group" alt="Mask group" src={imageUrl} />
        <p className="text-wrapper">{title}</p>
      </div>
    </div>
  );
};

export default NewCard;
