import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./booking.css"; // Import the corresponding CSS file
import BackImage from "../../utils/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../templates/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../templates/paymentInfo/payInfo";
import PinkButton from "../../utils/button/button";
import SeatView from "../../templates/seatView/seat";
import PriceSummary from "../../templates/paymentSummary/test";
import MyBackgroundImage from "../../pages/booking/spaceship-names2.jpg";
import Sidebar from "../../components/sideBar/sidebar";
const API_BASE_URL = "http://localhost:5000";

const Booking = () => {
/* The code snippet is using the `useParams` hook from the `react-router-dom` library to extract the
`flightid` parameter from the URL. */
  const { flightid } = useParams();
  const [spaceshipData, setSpaceshipData] = useState({
    name: "",
    spaceshipName: "",
    date: "",
    capacity: 0,
    departurePlanet: "",
    destinationPlanet: "",
    price: 0,
  });
/* These lines of code are using the `useState` hook from React to create and initialize state
variables in the `Booking` component. */
  const [selectedSeats, setSelectedSeats] = useState([]); // Maintain selected seats
  const [passengerCount, setPassengerCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [travelClasses, setTravelClasses] = useState([]);
  const [selectedtravelClass, setselectedtravelClass] = useState([]);
  const [isSeatViewLocked, setIsSeatViewLocked] = useState(true);
  const [isEnterDetailsLocked, setIsEnterDetailsLocked] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const lockedStyle = {
    filter: "grayscale(100%)",
    pointerEvents: "none",
  };

  const unlockedStyle = {
    filter: "none",
    pointerEvents: "auto",
  };

/**
 * The `handleBookNow` function converts selected seats into an array of objects and sends a POST
 * request to reserve the seats.
 */
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
      setReservationSuccess(true);
    } catch (error) {
      console.error("Error reserving seats:", error);
      // You might want to display an error message to the user here.
    }
  };

/* The `useEffect` hook is used to perform side effects in functional components. In this code snippet,
the `useEffect` hook is used to fetch travel classes data from the backend API. */
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

/* The `useEffect` hook in the code snippet is used to fetch spaceship data from the backend API. */
  useEffect(() => {
    // Fetch spaceship data from backend
    console.log(flightid);
    axios.get(`${API_BASE_URL}/spaceship/${flightid}`).then(({ data }) => {
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

/* The code snippet is rendering a section of the booking page where the user can select their desired
travel class. It uses the `travelClasses` array to map over each travel class and render a `Card`
component for each one. The `Card` component displays information about the travel class, such as
the date, class name, departure and destination planets, and price. The `setselectedtravelClass`
function is passed as a prop to the `Card` component, allowing the user to select a travel class by
clicking on a card. */
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
      <div
        className="booking-page"
        style={isEnterDetailsLocked ? lockedStyle : unlockedStyle}
      >
        <EnterDetails
          passengerCount={passengerCount}
          setPassengerCount={setPassengerCount}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
          childrenCount={childrenCount}
          setChildrenCount={setChildrenCount}
          setIsEnterDetailsLocked={setIsEnterDetailsLocked}
          setIsSeatViewLocked={setIsSeatViewLocked}
          isEnterDetailsLocked={isEnterDetailsLocked}
          isSeatViewLocked={isSeatViewLocked}
        />
      </div>
      <div className="booking-sub-title"> Select Your Seat</div>
      <div
        className="booking-page"
        style={isSeatViewLocked ? lockedStyle : unlockedStyle}
      >
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
          passengers={passengerCount}
          category={selectedtravelClass.class}
          adults={adultCount}
          children={childrenCount}
          pricePerAdult={spaceshipData.price}
          //pricePerChild={50}
          discount={20}
        />
      </div>
      <div className={reservationSuccess ? "disabled-button" : ""}></div>
      <PinkButton
        text={"Book"}
        onClick={handleBookNow}
        className={reservationSuccess ? "disabled-button" : ""}
      />
      {reservationSuccess && (
        <div className="reservation-success-animation">
          You have successfully reserved your seats. See you in space!
        </div>
      )}
    </div>
  );
};

export default Booking;
