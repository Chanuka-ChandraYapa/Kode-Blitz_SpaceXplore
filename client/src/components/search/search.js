import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import List from "../../utils/list/list";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [inputText, setInputText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Destination"); // Initial selected filter
  const [showFilterList, setShowFilterList] = useState(false);
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const toggleFilterList = () => {
    setShowFilterList(!showFilterList);
  };

  const handleFilterChange = (option) => {
    setSelectedFilter(option);
    setShowFilterList(false); // Close the filter dropdown
  };

  const filterOptions = ["Destination", "Price", "Departure"]; // Add more options if needed

  useEffect(() => {
    // Here you can load the JSON file based on the selected filter
    // For simplicity, I'm just logging the selected filter
    console.log("Selected filter:", selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="search-main">
      <div className="search-container">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input
          type="text"
          className="search-input"
          placeholder={`Search for ${selectedFilter}`}
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
              {filterOptions.map((option, index) => (
                <li key={index} onClick={() => handleFilterChange(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <List input={inputText} />
    </div>
  );
}

export default Search;
