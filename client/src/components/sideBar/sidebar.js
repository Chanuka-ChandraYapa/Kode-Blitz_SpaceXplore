import React from "react";
import "./sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        Close
      </button>
      <ul>
        <li>Home</li>
        <li>Flights</li>
        <li>Planets</li>
        <li>Profile</li>
        <li>Team</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
