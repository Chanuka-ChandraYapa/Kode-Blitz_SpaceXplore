import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../list/list";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
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
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={inputHandler}
        />
        <FontAwesomeIcon
          className="filter-icon"
          icon={faFilter}
          onClick={toggleFilterList}
        />
        {showFilterList && (
          <div className={`filter-dropdown ${showFilterList ? "active" : ""}`}>
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

export default Search;
