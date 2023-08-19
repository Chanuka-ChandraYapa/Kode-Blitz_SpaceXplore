import React from "react";
import "./test.css"; // Import the corresponding CSS file

const PriceSummary = ({
  passengers,
  adults,
  children,
  pricePerAdult,
  category = "",
  pricePerChild,
  discount,
}) => {
  const totalAdultPrice = adults * pricePerAdult;
  const totalChildPrice = children * pricePerChild;
  const subtotal = totalAdultPrice + totalChildPrice;
  const totalAmount = subtotal - discount;

  return (
    <div className="price-summary">
      <div className="category">
        <span>{` ${category}`}</span>
      </div>
      <div className="row">
        <span>{`Passengers x${passengers}`}</span>
      </div>
      <div className="row">
        <span>{`Adults x${adults}`}</span>
        <span>{`$${totalAdultPrice}`}</span>
      </div>
      <div className="row">
        <span>{`Children x${children}`}</span>
        <span>{`$${totalChildPrice}`}</span>
      </div>
      <div className="row">
        <span>Discount</span>
        <span>{`-$${discount}`}</span>
      </div>
      <div className="total-row">
        <span>Total Amount</span>
        <span>{`$${totalAmount}`}</span>
      </div>
    </div>
  );
};

export default PriceSummary;
