import React from "react";
import "./background.css"; // Import the background CSS file

const BackgroundComponent = ({ children }) => {
  return <div className="background">{children}</div>;
};

export default BackgroundComponent;
