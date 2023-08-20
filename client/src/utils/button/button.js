import React from "react";
import "./button.css";

const PinkButton = ({ text, onClick , size}) => {
  return (
    <button type="submit" style={{ fontSize: size }} onClick={onClick}>
      {text}
    </button>
  );
};

export default PinkButton;
