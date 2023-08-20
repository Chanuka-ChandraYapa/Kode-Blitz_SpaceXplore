import React, { useState } from "react";
import "./PassengerDetailsForm.css";

const PassengerDetailsForm = ({
  onPassengerDetailsChange,
  isAdult,
  isFilled,
}) => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    onPassengerDetailsChange({
      fullName: event.target.value,
      dateOfBirth,
      gender,
      isAdult,
      isFilled: Boolean(event.target.value && dateOfBirth && gender),
    });
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
    onPassengerDetailsChange({
      fullName,
      dateOfBirth: event.target.value,
      gender,
      isAdult,
      isFilled: Boolean(fullName && event.target.value && gender),
    });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    onPassengerDetailsChange({
      fullName,
      dateOfBirth,
      gender: event.target.value,
      isAdult,
      isFilled: Boolean(fullName && dateOfBirth && event.target.value),
    });
  };

  return (
    <div className="passenger-details-form">
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="details-input"
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="deatils-label" htmlFor="dateOfBirth">
            Date of Birth:
          </label>
          <input
            className="details-input"
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="deatils-label" htmlFor="gender">
            Gender:
          </label>
          <select
            className="details-select"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetailsForm;
