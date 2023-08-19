import React, { useState } from "react";
import "./payInfo.css"; // Import your CSS file

const PaymentInfo = () => {
  const [fullName, setFullName] = useState("");
  const [expDate, setexpDate] = useState("");
  const [CVV, setCVV] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleexpDate = (event) => {
    setexpDate(event.target.value);
  };

  const handleCVV = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any desired actions with the collected data here
  };

  return (
    <div className="enter-payment-details">
      <div className="passenger-details-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="pay-label" htmlFor="fullName">
              Card No:
            </label>
            <input
              className="pay-input"
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="pay-label" htmlFor="dateOfBirth">
              Exp Date:
            </label>
            <input
              className="pay-input"
              type="date"
              id="dateOfBirth"
              value={expDate}
              onChange={handleexpDate}
              required
            />
          </div>
          <div className="form-group">
            <label className="pay-label" htmlFor="fullName">
              CCV/CVV:
            </label>
            <input
              className="pay-input"
              type="text"
              id="fullName"
              value={CVV}
              onChange={handleCVV}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfo;
