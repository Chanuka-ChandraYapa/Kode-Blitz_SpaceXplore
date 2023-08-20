import React, { useState } from "react";
import "./numSpinner.css";

const NumberSpinner = ({ value, onChange }) => {
  const [number, setNumber] = useState(value);
  const [intervalId, setIntervalId] = useState(null);

  const startIncrementInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setNumber((prevNumber) => (prevNumber + 1) % 13); // Ensure the value stays between 0 and 12
      }, 100); // Change the interval to control the speed of increment
      setIntervalId(id);
    }
  };

  const startDecrementInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setNumber((prevNumber) => (prevNumber - 1 + 13) % 13); // Ensure the value stays between 0 and 12
      }, 100); // Change the interval to control the speed of decrement
      setIntervalId(id);
    }
  };

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      onChange({ target: { value: number } });
    }
  };

  return (
    <div className="input-number">
      <button
        onTouchStart={startDecrementInterval}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
      >
        &#8722;
      </button>
      <span>{number}</span>
      <button
        onTouchStart={startIncrementInterval}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
      >
        &#43;
      </button>
    </div>
  );
};

export default NumberSpinner;
