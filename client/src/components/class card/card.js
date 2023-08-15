// Card.js
import React from "react";
import "./card.css"; // Import the corresponding CSS file

const Card = () => {
  return (
    <div className="card">
      <div className="rectangle"></div>
      <div className="register-button">Book</div>
      <div className="line"></div>
      <div className="date">13-09-07-30</div>
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
