import React from "react";
import "./booking.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../components/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../components/paymentInfo/payInfo";

import MyBackgroundImage from "../../pages/booking/spaceship-names2.jpg";
const Booking = () => {
  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="booking-heading">Galactic Dagger</div>
      <div className="booking-sub-heading">1600 CTC Today</div>
      <div className="booking-sub-title">Select Your Class</div>
      <div className="booking-page">
        <Card />
      </div>
      <div className="booking-sub-title">Enter your Details</div>
      <div className="booking-page">
        <EnterDetails />
      </div>
      <div className="booking-sub-title">Payment Info</div>
      <div className="booking-page">
        <PaymentInfo />
      </div>
    </div>
  );
};

export default Booking;
