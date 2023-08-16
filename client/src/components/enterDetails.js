import React, { useState } from "react";
import "./enterDetails.css"; // Import your CSS file

// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

  return (
    <div className="enter-details">
      <div className="section-heading">Business</div>
      <div className="detail-item">
        <span className="detail-label">No of Passengers:</span>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="passengers-label" sx={{ color: "#CB559E" }}>
            Passengers
          </InputLabel>
          <Select
            labelId="passengers-label"
            id="passengers-select"
            value={passengerCount}
            onChange={handlePassengerChange}
            label="Passengers"
            sx={{ color: "#CB559E" }} // Color for the selected value text
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (count) => (
                <MenuItem key={count} value={count}>
                  {count}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>

        <div className="detail-item">
          <span className="detail-label">No of Adults:</span>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="adult-label" sx={{ color: "#CB559E" }}>
              Adults
            </InputLabel>
            <Select
              labelId="adult-label"
              id="adult-select"
              value={adultCount}
              onChange={handleAdultChange}
              label="Adults"
              sx={{ color: "#CB559E" }} // Color for the selected value text
            >
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (count) => (
                  <MenuItem key={count} value={count}>
                    {count}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>

        <div className="detail-item">
          <span className="detail-label">No of Children:</span>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="Children-label" sx={{ color: "#CB559E" }}>
              Children
            </InputLabel>
            <Select
              labelId="children-label"
              id="children-select"
              value={childrenCount}
              onChange={handleChildrenChange}
              label="Children"
              sx={{ color: "#CB559E" }} // Color for the selected value text
            >
              {Array.from({ length: 10 }, (_, index) => index + 1).map(
                (count) => (
                  <MenuItem key={count} value={count}>
                    {count}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
      </div>
      {/* ... (similar blocks for No of Adults and No of Children) */}
    </div>
  );
};

export default EnterDetails;
