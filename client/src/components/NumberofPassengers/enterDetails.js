import React, { useState } from "react";
import "./enterDetails.css"; // Import your CSS file
import axios from "axios"; // Import axios library

import NumberSpinner from "../numberSpinner/numSpinner";
import PassengerDetailsForm from "../passengerDetails/PassengerDetailsForm";
import PinkButton from "../button/button";
import FormControl from "@mui/material/FormControl";

const EnterDetails = () => {
  const [passengerCount, setPassengerCount] = useState(1);
  const [tempPassengerDetailsArray, setTempPassengerDetailsArray] = useState(
    []
  );
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleAdultChange = (event) => {
    setAdultCount(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildrenCount(parseInt(event.target.value));
  };

  const handlePassengerChange = (event) => {
    setPassengerCount(parseInt(event.target.value));
  };

  const handlePassengerSubmit = async () => {
    console.log(tempPassengerDetailsArray);

    try {
      // Send the passenger details to the backend
      await axios.post("http://localhost:5000/", tempPassengerDetailsArray);

      // Reset the temporary passenger details array
      setTempPassengerDetailsArray([]);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handlePassengerDetailsChange = (index, details) => {
    setTempPassengerDetailsArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = details; // Update the correct index in the array
      return newArray;
    });
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
      {/* <span className="detail-label">No of Passengers:</span>
    <div className="detail-item">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <NumberSpinner
          value={passengerCount}
          onChange={handlePassengerChange}
        />
      </FormControl>
      <div>{passengerCount}</div>
    </div> */}
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
      {/* {Array.from({ length: passengerCount }, (_, index) => (
      <div>
        <div className="detail-label">Passenger {index + 1}</div>
        <PassengerDetailsForm key={index} />
      </div>
    ))} */}
      <div className="passenger-details-container">
        {Array.from({ length: adultCount }, (_, index) => (
          <div key={index}>
            <div className="detail-label">Passenger {index + 1} (Adult)</div>
            <PassengerDetailsForm
              onPassengerDetailsChange={(details) =>
                handlePassengerDetailsChange(index, details)
              }
            />
          </div>
        ))}

        {Array.from({ length: childrenCount }, (_, index) => (
          <div key={index + adultCount}>
            <div className="detail-label">
              Passenger {index + adultCount + 1} (Children)
            </div>
            <PassengerDetailsForm
              onPassengerDetailsChange={(details) =>
                handlePassengerDetailsChange(index + adultCount, details)
              }
            />
          </div>
        ))}
      </div>
      {/* <SlidingPassengerForms adultCount={adultCount} childrenCount ={ childrenCount} /> */}

      <PinkButton onClick={handlePassengerSubmit} text={"Select Your Seats"} />
    </div>
  );
};

export default EnterDetails;
