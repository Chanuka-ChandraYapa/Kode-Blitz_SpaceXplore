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
const API_BASE_URL = "http://192.168.43.150:5000";

const Booking = () => {
  const [spaceshipData, setSpaceshipData] = useState({
    name: "",
    spaceshipName: "",
    date: "",
    capacity: 0,
    departurePlanet: "",
    destinationPlanet: "",
    price: 0,
  });
  const [selectedSeats, setSelectedSeats] = useState([]); // Maintain selected seats
  const [passengerCount, setPassengerCount] = useState(0);
  const [travelClasses, setTravelClasses] = useState([]);
  const [selectedtravelClass, setselectedtravelClass] = useState([]);

  const handleBookNow = async () => {
    try {
      // Convert selectedSeats into an array of objects with the required format
      const seatInfoArray = selectedSeats.map((seat) => ({
        seatid: seat.row * 6 + seat.col,
        Spaceship_ID: spaceshipData.spaceshipName, // Assuming spaceshipData has the model id
        Class_id: selectedtravelClass.class_id, // Change this to your desired Class_id
      }));
      console.log(seatInfoArray);
      const response = await axios.post(`${API_BASE_URL}/reserve-seats`, {
        seatInfoArray,
      });

      console.log(response.data.message); // Success message from the server
    } catch (error) {
      console.error("Error reserving seats:", error);
      // You might want to display an error message to the user here.
    }
  };

  useEffect(() => {
    // Fetch travel classes data from backend
    axios
      .get(`${API_BASE_URL}/travel-classes`) // Adjust the API endpoint based on your setup
      .then(({ data }) => {
        setTravelClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error here, e.g., display an error message.
      });
  }, []);

  useEffect(() => {
    // Fetch spaceship data from backend
    axios.get(`${API_BASE_URL}/spaceship`).then(({ data }) => {
      setSpaceshipData({
        name: data.spaceshipName,
        spaceshipName: data.spaceshipID,
        date: data.startingDate,
        capacity: data.seating_capacity,
        departurePlanet: data.departurePlanet,
        destinationPlanet: data.destinationPlanet,
        price: data.price,
      });
    });
  }, []);

  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      {/* <Sidebar /> */}
      <div className="void"></div>
      <div className="booking-heading">{spaceshipData.name}</div>
      <div className="booking-sub-heading">{spaceshipData.date}</div>
      <div className="booking-sub-title">Select Your Class</div>
      <div className="booking-page">
        <div className="class-Scrolling">
          <div className="class-container">
            {travelClasses.map((travelClass) => (
              <div className="card" key={travelClass.Class_ID}>
                <Card
                  date={"2198-01-18"} // Replace with the actual date property
                  Class={travelClass.Name}
                  Class_ID={travelClass.Class_ID}
                  Departure={spaceshipData.departurePlanet} // Replace with the actual departure property
                  Destination={spaceshipData.destinationPlanet} // Replace with the actual destination property
                  Price={spaceshipData.price}
                  setselectedtravelClass={setselectedtravelClass}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="booking-sub-title">Enter your Details</div>
      <div className="booking-page">
        <EnterDetails
          passengerCount={passengerCount}
          setPassengerCount={setPassengerCount}
        />
      </div>
      <div className="booking-sub-title"> Select Your Seat</div>
      <div className="booking-page">
        <SeatView
          seat_capacity={48}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          passengerCount={passengerCount}
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
