import React, { useState } from "react";
import axios from "axios";
import "./enterDetails.css";
import PassengerDetailsForm from "../passengerDetails/PassengerDetailsForm";
import PinkButton from "../button/button";
import FormControl from "@mui/material/FormControl";
import NumberSpinner from "../numberSpinner/numSpinner";

const EnterDetails = ({ passengerCount, setPassengerCount }) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [tempPassengerDetailsArray, setTempPassengerDetailsArray] = useState(
    []
  );

  const handleAdultChange = (event) => {
    setAdultCount(parseInt(event.target.value));
    
  };

  const handleChildrenChange = (event) => {
    setChildrenCount(parseInt(event.target.value));
  };

  const handlePassengerDetailsChange = (index, details) => {
    setTempPassengerDetailsArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = details;
      return newArray;
    });
  };

  const handlePassengerSubmit = async () => {
    console.log(tempPassengerDetailsArray);
    setPassengerCount(childrenCount + adultCount);

    try {
      await axios.post(
        "http://localhost:5000/passenger-details",
        tempPassengerDetailsArray
      );

      setTempPassengerDetailsArray([]);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="enter-details">
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
      <div className="passenger-details-container">
        {Array.from({ length: adultCount }, (_, index) => (
          <div key={index}>
            <div className="detail-label">Passenger {index + 1} (Adult)</div>
            <PassengerDetailsForm
              onPassengerDetailsChange={(details) =>
                handlePassengerDetailsChange(index, details)
              }
              isAdult={true}
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
              isAdult={false}
            />
          </div>
        ))}
      </div>

      <PinkButton onClick={handlePassengerSubmit} text={"Select Your Seats"} />
    </div>
  );
};

export default EnterDetails;
