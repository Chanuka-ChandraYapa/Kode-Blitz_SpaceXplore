/**
 * The Card component is a React component that displays information about a travel class and allows
 * the user to select it.
 * @returns The Card component is being returned.
 */
// Card.js
import React from "react";
import "./card.css"; // Import the corresponding CSS file
import PinkButton from "../../utils/button/button";

const Card = ({
  date,
  Class,
  Class_ID,
  Departure,
  Destination,
  Price,
  setselectedtravelClass,
}) => {
  const handleselect = () => {
    setselectedtravelClass({ class: Class, class_id: Class_ID });
  };

  return (
    <div className="card">
      <div className="rectangle"></div>
      <div className="register-button">
        <PinkButton text={"select"} size={18} onClick={handleselect} />
      </div>
      <div className="line"></div>
      <div className="date">{date}</div>
      <div className="mars-heading">{Destination}</div>
      <div className="economy-heading">{Class}</div>
      <div className="earth-heading">{Departure}</div>
      <div className="ctc">1600 CTC</div>
      <div className="line-12"></div>
      <div className="ac-heading">{Price}AC</div>
    </div>
  );
};

export default Card;
