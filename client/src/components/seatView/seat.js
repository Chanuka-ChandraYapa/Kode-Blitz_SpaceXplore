import React, { useState, useEffect } from "react";
import "./seat.css";
import axios from "axios"; // Import Axios for making API requests
const API_BASE_URL = "http://localhost:5000";

const SeatView = ({
  seat_capacity,
  selectedSeats,
  setSelectedSeats,
  passengerCount,
}) => {
  const rows = Math.ceil(seat_capacity / 6);
  const columns = 6;
  const [bookedSeats, setBookedSeats] = useState([]); // State to store booked seats

  // Fetch booked seats data from the backend
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/seats`)
      .then(({ data }) => {
        const bookedSeatData = data.map((seat) => ({
          row: Math.floor(seat.Seat_Id / 6),
          col: seat.Seat_Id % 6,
        }));
        setBookedSeats(bookedSeatData);
      })
      .catch((error) => {
        console.error("Error fetching booked seats:", error);
        // Handle the error here, e.g., display an error message.
      });
  }, []);

  // Function to check seat status (available, selected, or reserved)
  const seatStatus = (row, col) => {
    if (bookedSeats.some((seat) => seat.row === row && seat.col === col)) {
      return "reserved";
    }
    if (selectedSeats.some((seat) => seat.row === row && seat.col === col)) {
      return "selected";
    }
    return "available";
  };

  const handleSeatClick = (row, col) => {
    const isReserved = seatStatus(row, col) === "reserved";
    const seatIndex = selectedSeats.findIndex(
      (seat) => seat.row === row && seat.col === col
    );

    if (!isReserved) {
      if (seatIndex !== -1) {
        const updatedSeats = selectedSeats.filter(
          (seat) => !(seat.row === row && seat.col === col)
        );
        setSelectedSeats(updatedSeats);
      } else if (selectedSeats.length < passengerCount) {
        setSelectedSeats([...selectedSeats, { row, col }]);
      } else {
        alert("You have selected all the seats");
      }
    }
  };

  return (
    <div className="enter-seat-details">
      <div className="seat-view">
        <div className="grid">
          {Array.from({ length: rows }).map((_, row) => (
            <div key={row} className="row">
              {Array.from({ length: columns }).map((_, col) => (
                <div
                  key={col}
                  className={`seat ${seatStatus(row, col)}`}
                  onClick={() => handleSeatClick(row, col)}
                >
                  {String.fromCharCode(65 + col)}
                  {row + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="selected-seats">
          <h2>Selected Seats:</h2>
          <div className="selected-seats-list">
            {selectedSeats.map((seat, index) => (
              <span key={index} className="selected-seat">
                {String.fromCharCode(65 + seat.col)}
                {seat.row + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatView;
