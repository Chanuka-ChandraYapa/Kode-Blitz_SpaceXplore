import React from "react";
import "./navigationBar.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./navigationBar.css"; // Import your CSS file

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">Spacexplore</div>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="notification-icon">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="sign-out-icon">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </div>
    </div>
  );
};

export default NavigationBar;
