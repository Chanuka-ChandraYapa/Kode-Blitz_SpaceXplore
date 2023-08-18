import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../list/list";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const [showFilterList, setShowFilterList] = useState(false);

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };

  return (
    <div className="search-main">
      <div className="search-container">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon
          className="filter-icon"
          icon={faFilter}
          onClick={toggleFilterList}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={inputHandler}
        />
        {showFilterList && (
          <div className={`filter-dropdown ${showFilterList ? "active" : ""}`}>
            {/* Dropdown content */}
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>

      <List input={inputText} />
    </div>
  );
}
// import React from "react";
// import "./test1.css"; // Make sure to have the corresponding CSS file

// const SearchButton = () => {
//   return (
//     <div className="search-button-container">
//       <div className="search-icon">
//         <i className="fas fa-search"></i>
//       </div>
//       <input type="text" className="search-input" placeholder="Search..." />
//       <div className="filter-icon">
//         <i className="fas fa-filter"></i>
//       </div>
//     </div>
//   );
// };

export default Search;
