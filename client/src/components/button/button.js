import React from "react";
import "./button.css";

const PinkButton = ({ text, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default PinkButton;
