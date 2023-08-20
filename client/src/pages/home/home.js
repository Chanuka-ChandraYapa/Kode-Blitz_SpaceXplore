import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./home.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../components/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../components/paymentInfo/payInfo";
import PinkButton from "../../components/button/button";
import SeatView from "../../components/seatView/seat";
import PriceSummary from "../../components/paymentSummary/test";
import MyBackgroundImage from "../../pages/home/marcelo-quinan-R3pUGn5YiTg-unsplash.jpg";
import Search from "../../components/search/search";
import DiscoverCard from "../../components/discoverCard/discover";
import { API_BASE_URL } from "../../config/config";

const Home = () => {
  const [travelPlanets, settravelPlanets] = useState([]);
  const [flightSchedules, setFlightSchedules] = useState([]);
  useEffect(() => {
    // Fetch planet data from backend
    axios.get(`${API_BASE_URL}/planets`).then(({ data }) => {
      settravelPlanets(data);
    });
    axios.get(`${API_BASE_URL}/latest-flights`).then(({ data }) => {
      setFlightSchedules(data);
      console.log(flightSchedules);
    });
  }, []);

  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="home-heading">Search Your Dream</div>
      <Search />
      <div className="booking-sub-title">Discover Planets</div>
      <div className="booking-page">
        <div className="disScrolling">
          <div className="discontainer">
            {travelPlanets.map((planetName) => (
              <Link to={`/planet/${planetName.Name}`}>
                <div className="discard" key={planetName}>
                  <DiscoverCard
                    text={planetName.Name}
                    MyBackgroundImage={planetName.Image_Link}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="booking-sub-title">Flights Schedule</div>
      <div className="booking-page">
        <div className="disScrolling">
          <div className="discontainer">
            {flightSchedules.map((flightSchedule) => (
              <Link to={`/booking/${flightSchedule.Flight_ID}`}>
                <div className="discard" key={flightSchedule.Schedule_ID}>
                  {/* Render flight schedule details using DiscoverCard or a custom component */}
                  <DiscoverCard
                    text={flightSchedule.SpaceShip.Model_Name}
                    //MyBackgroundImage={flightSchedule.SpaceShip_ID}
                    subsubtext={flightSchedule.Starting_Date}
                    subsubsubtext={flightSchedule.Flight.Destination_Planet}
                    MyBackgroundImage={flightSchedule.SpaceShip.image_link}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
