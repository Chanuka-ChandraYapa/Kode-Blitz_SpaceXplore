import React, { useState } from "react";
import "./enterDetails.css"; // Import your CSS file
import axios from "axios";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import PassengerDetailsForm from "../passengerDetails/PassengerDetailsForm";
import NumberSpinner from "../numberSpinner/numSpinner";
import PinkButton from "../button/button";

const EnterDetails = () => {
  const [passengerCount, setPassengerCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(1);
  const [passengerDetailsArray, setPassengerDetailsArray] = useState([]);
  const [tempPassengerDetailsArray, setTempPassengerDetailsArray] = useState(
    []
  ); // New state for temporary array

  const handlePassengerChange = (event) => {
    setPassengerCount(parseInt(event.target.value));
  };

  const handleAdultChange = (event) => {
    setAdultCount(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildrenCount(parseInt(event.target.value));
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
      {/* ... (rest of the code) */}
      {Array.from({ length: passengerCount }, (_, index) => (
        <div key={index}>
          <div className="detail-label">Passenger {index + 1}</div>
          <PassengerDetailsForm
            onPassengerDetailsChange={(details) =>
              handlePassengerDetailsChange(index, details)
            }
          />
        </div>
      ))}

      <PinkButton text={"Select Your Seats"} onClick={handlePassengerSubmit} />
    </div>
  );
};

export default EnterDetails;
