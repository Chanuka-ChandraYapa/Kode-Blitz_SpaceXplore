import React, { useState } from "react";
import "./enterDetails.css"; // Import your CSS file

// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PassengerDetailsForm from "../passengerDetails/PassengerDetailsForm";
import NumberSpinner from "../numberSpinner/numSpinner";
import PinkButton from "../button/button";

const EnterDetails = () => {
  const [passengerCount, setPassengerCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(1);

  const handlePassengerChange = (event) => {
    setPassengerCount(parseInt(event.target.value));
  };

  const handleAdultChange = (event) => {
    setAdultCount(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildrenCount(parseInt(event.target.value));
  };
  const handleSubmit = (event) => {
    console.log.print("HI");
  };

  return (
    <div className="enter-details">
      {/* <div>
        <mobiscroll.Number
          ref="number"
          theme="ios"
          themeVariant="light"
          layout="fixed"
          step={1}
          min={10}
          max={150}
          width={150}
          placeholder="Please Select..."
        />
      </div> */}

      <div className="section-heading">Business</div>

      <span className="detail-label">No of Passengers:</span>
      <div className="detail-item">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <NumberSpinner
            value={passengerCount}
            onChange={handlePassengerChange}
          />
        </FormControl>
        <div>{passengerCount}</div>
      </div>

      <span className="detail-label">No of Adults:</span>
      <div className="detail-item">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <NumberSpinner value={adultCount} onChange={handleAdultChange} />
        </FormControl>
      </div>

      <span className="detail-label">No of Children:</span>
      <div className="detail-item">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <NumberSpinner
            value={childrenCount}
            onChange={handleChildrenChange}
          />
        </FormControl>
      </div>
      {/* ... (similar blocks for No of Adults and No of Children) */}
      {Array.from({ length: passengerCount }, (_, index) => (
        <div>
          <div className="detail-label">Passenger {index + 1}</div>
          <PassengerDetailsForm key={index} />
        </div>
      ))}

      <PinkButton onClick={handleSubmit} text={"Select Your Seats"} />
    </div>
  );
};

export default EnterDetails;
