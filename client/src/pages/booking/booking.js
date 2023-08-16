import React from "react";
import "./booking.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";

import MyBackgroundImage from "../../pages/booking/spaceship-names2.jpg";
const Booking = () => {
  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
    </div>
  );
};

export default Booking;
