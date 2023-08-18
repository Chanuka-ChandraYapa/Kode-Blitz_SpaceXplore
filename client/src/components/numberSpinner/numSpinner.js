import React, { useState } from "react";
import "./numSpinner.css";

const NumberSpinner = ({ value, onChange }) => {
  const [number, setNumber] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startIncrementInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 100); // Change the interval to control the speed of increment
      setIntervalId(id);
    }
  };

  const startDecrementInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setNumber((prevNumber) => prevNumber - 1);
      }, 100); // Change the interval to control the speed of decrement
      setIntervalId(id);
    }
  };

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div className="input-number">
      <button
        onTouchStart={() => {
          startDecrementInterval();
          onChange({ target: { value: value - 1 } });
        }}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
      >
        &#8722;
      </button>
      <span>{value}</span>
      <button
        onTouchStart={() => {
          startIncrementInterval();
          onChange({ target: { value: value + 1 } });
        }}
        onTouchEnd={stopInterval}
        onTouchCancel={stopInterval}
      >
        &#43;
      </button>
    </div>
  );
};

export default NumberSpinner;
