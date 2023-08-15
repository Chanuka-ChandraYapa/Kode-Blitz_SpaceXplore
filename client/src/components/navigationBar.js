import React from "react";
import "./navigationBar.css"; // Import your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./navigationBar.css"; // Import your CSS file

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">Spacexplore</div>
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <div className="notification-icon">
        <i className="fas fa-bell"></i>
        <div className="notification-indicator"></div>
      </div>
      <div className="profile-icon">
        <div className="profile-icon-inner">
          <div className="profile-icon-bg"></div>
          <i className="fas fa-user"></i>
        </div>
      </div>
      <div className="sign-out-icon">
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default NavigationBar;
