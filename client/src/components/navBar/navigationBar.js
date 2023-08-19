import React, { useState } from "react";
import "./navigationBar.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./navigationBar.css"; // Import your CSS file
import Sidebar from "../sideBar/sidebar";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="menu-icon">
        <Sidebar />
      </div>

      <div className="logo">Spacexplore</div>
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
