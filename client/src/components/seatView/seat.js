import React, { useState } from "react";
import "./seat.css"; // Import the corresponding CSS file

const SeatView = ({ seat_capacity, selectedSeats, setSelectedSeats }) => {
  const rows = Math.ceil(seat_capacity / 6);
  const columns = 6;

  const seatStatus = (row, col) => {
    if (row === 2 && col === 3) return "reserved";
    if (row === 5 && col === 2) return "reserved";
    if (selectedSeats.some((seat) => seat.row === row && seat.col === col))
      return "selected";
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
      } else {
        setSelectedSeats([...selectedSeats, { row, col }]);
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
