import React, { useState, useEffect } from "react";
import axios from "axios";
import "./enterDetails.css";
import PassengerDetailsForm from "../passengerDetails/PassengerDetailsForm";
import PinkButton from "../../utils/button/button";
import FormControl from "@mui/material/FormControl";
import NumberSpinner from "../../utils/numberSpinner/numSpinner";

const EnterDetails = ({
  category,
  passengerCount,
  setPassengerCount,
  adultCount,
  setAdultCount,
  childrenCount,
  setChildrenCount,
  setIsEnterDetailsLocked,
  setIsSeatViewLocked,
  isSeatViewLocked,
  isEnterDetailsLocked,
}) => {
  const [tempPassengerDetailsArray, setTempPassengerDetailsArray] = useState(
    []
  );
  const [isFilled, setIsFilled] = useState(false);
  const [isFormsFilled, setIsFormsFilled] = useState(false);
  useEffect(() => {
    setIsFormsFilled(
      tempPassengerDetailsArray.every((details) => details.isFilled)
    );
    // console.log(isFilled)
    // setIsFormsFilled(isFilled);
  }, [tempPassengerDetailsArray]);
  console.log(tempPassengerDetailsArray);
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
    if (!isFormsFilled) {
      alert("Please fill out all passenger details before proceeding.");
      return;
    }

    console.log(tempPassengerDetailsArray);
    setPassengerCount(childrenCount + adultCount);
    setIsSeatViewLocked(!isSeatViewLocked);
    setIsEnterDetailsLocked(!isEnterDetailsLocked);

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
      <div className="booking-category">{category}</div>
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
      <div className="warning-booking">
        After You Click the below button you cannot go back and no longer will
        be able to update your details in the form
      </div>
      <PinkButton onClick={handlePassengerSubmit} text={"Select Your Seats"} />
    </div>
  );
};

export default EnterDetails;
