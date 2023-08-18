// Card.js
import React from "react";
import "./card.css"; // Import the corresponding CSS file
import PinkButton from "../button/button";

const Card = ({ date }) => {
  return (
    <div className="card">
      <div className="rectangle"></div>
      <div className="register-button">
        <PinkButton text={"select"} size={18} />
      </div>
      <div className="line"></div>
      <div className="date">{date}</div>
      <div className="mars-heading">MARS</div>
      <div className="economy-heading">Economy</div>
      <div className="earth-heading">Earth</div>
      <div className="ctc">1600 CTC</div>
      <div className="line-12"></div>
      <div className="ac-heading">150 AC</div>
    </div>
  );
};

export default Card;
