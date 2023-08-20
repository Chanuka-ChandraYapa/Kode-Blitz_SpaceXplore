/**
 * The Sidebar component is a React component that displays a sidebar menu with a burger button to
 * toggle its visibility.
 * @returns The Sidebar component is returning a JSX element. It consists of a FontAwesomeIcon
 * component for the burger button, and a div element with the class "sidebar" that contains a nav
 * element with a list of links. The sidebar element has a dynamic class name that is determined by the
 * value of the sidebarOpen state variable.
 */
import React, { useState, useEffect, useRef } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const sidebarRef = useRef(null); // Ref for the sidebar element

  // Close sidebar when clicking outside
  const handleOutsideClick = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.classList.contains("burger-button") // Exclude the burger button from closing
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <FontAwesomeIcon
        className="burger-button"
        onClick={toggleSidebar}
        icon={faBars}
      />
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/flights">Flights</a>
            </li>
            <li>
              <a href="/planet">Planets</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/landing">Introduction</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
