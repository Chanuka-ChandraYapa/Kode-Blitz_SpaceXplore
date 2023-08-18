import React from "react";
import "./booking.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../components/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../components/paymentInfo/payInfo";
import PinkButton from "../../components/button/button";
import SeatView from "../../components/seatView/seat";
import PriceSummary from "../../components/paymentSummary/test";
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
        <div className="class-Scrolling">
          <div className="class-container">
            <div class="card">
              <Card date={"2023-12-21"} />
            </div>
            <div class="card">
              <Card />
            </div>
            <div class="card">
              <Card />
            </div>
            <div class="card">
              <Card date={"2023-12-21-hiii"} planet={"Neptune"} />
            </div>
            <div class="card">
              <Card />
            </div>
            <div class="card">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="booking-sub-title">Enter your Details</div>
      <div className="booking-page">
        <EnterDetails />
      </div>
      <div className="booking-sub-title"> Select Your Seat</div>
      <div className="booking-page">
        <SeatView />
      </div>
      <div className="booking-sub-title">Payment Info</div>
      <div className="booking-page">
        <PaymentInfo />
      </div>
      <div className="booking-sub-title">Payment summary</div>
      <div className="booking-page">
        <PriceSummary
          passengers={3}
          category={"Business"}
          adults={2}
          children={1}
          pricePerAdult={100}
          pricePerChild={50}
          discount={20}
        />
      </div>

      <PinkButton text={"Book"} />
    </div>
  );
};

export default Booking;
