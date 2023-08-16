import React from "react";
import "./priceSummery.css";

const PriceSummery = () => {
  return (
    <div className="box">
      <div className="price-summery">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="business">BUSINESS</div>
          <div className="passengers-x">
            Passengers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x 2
          </div>
          <img className="vector" alt="Vector" src="vector-3.svg" />
          <div className="adults-x">
            Adults&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x 2
          </div>
          <img className="line" alt="Line" src="line-12.svg" />
          <div className="children-x">Children&nbsp;&nbsp; x 0</div>
          <img className="img" alt="Line" src="line-20.svg" />
          <div className="text-wrapper">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
          </div>
          <div className="div">Discount</div>
          <div className="element">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0</div>
          <img className="line-2" alt="Line" src="line-21.svg" />
          <div className="text-wrapper-2">Total Amount</div>
          <img className="line-3" alt="Line" src="line-22.svg" />
          <div className="text-wrapper-3">340 AC</div>
          <div className="element-x">170&nbsp;&nbsp;x&nbsp;&nbsp; 2</div>
        </div>
      </div>
    </div>
  );
};

export default PriceSummery;