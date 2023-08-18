import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Sidebar from "../../components/sideBar/sidebar";

const Booking = () => {
  const [spaceshipData, setSpaceshipData] = useState({
    name: "",
    time: "",
  });
  const [selectedSeats, setSelectedSeats] = useState([]); // Maintain selected seats

  const handleBookNow = async () => {
    try {
      console.log(selectedSeats);
      const response = await axios.post("http://localhost:5000/reserve-seats", {
        seats: selectedSeats,
      });
      console.log(response.data.message); // Success message from the server
    } catch (error) {
      console.error("Error reserving seats:", error);
    }
  };

  useEffect(() => {
    // Fetch spaceship data from backend
    axios.get("http://localhost:5000/spaceship").then((response) => {
      const firstSpaceship = response.data;
      setSpaceshipData({
        name: firstSpaceship.spaceshipName,
        date: firstSpaceship.startingDate,
        capacity: firstSpaceship.seating_capacity,
      });
    });
  }, []);
  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <Sidebar />
      <div className="void"></div>
      <div className="booking-heading">{spaceshipData.name}</div>
      <div className="booking-sub-heading">{spaceshipData.date}</div>
      <div className="booking-sub-title">Select Your Class</div>
      <div className="booking-page">
        <div className="class-Scrolling">
          <div className="class-container">
            <div class="card">
              <Card date={"2198-01-18"} />
            </div>
            <div class="card">
              <Card date={"2198-01-18"} />
            </div>
            <div class="card">
              <Card />
            </div>
            <div class="card">
              <Card date={"2198-01-18"} />
            </div>
            <div class="card">
              <Card date={"2198-01-18"} />
            </div>
            <div class="card">
              <Card date={"2198-01-18"} />
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
        <SeatView
          seat_capacity={48}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
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

      <PinkButton text={"Book"} onClick={handleBookNow} />
    </div>
  );
};

export default Booking;
