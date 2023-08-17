import React, { useState } from "react";
import "./button.css";

const PinkButton = ({ text, size }) => {
  return (
    <button type="submit" style={{ fontSize: size }}>
      {text}
    </button>
  );
};

export default PinkButton;
