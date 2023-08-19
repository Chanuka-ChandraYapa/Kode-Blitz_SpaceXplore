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
const API_BASE_URL = "http://localhost:5000";

const Home = () => {
  const [travelPlanets, settravelPlanets] = useState([]);
  useEffect(() => {
    // Fetch planet data from backend
    axios.get(`${API_BASE_URL}/planets`).then(({ data }) => {
      settravelPlanets(data);
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
            {travelPlanets.map((planet) => (
              <div className="discard" key={planet.Name}>
                <DiscoverCard
                  planetName={planet.Name}
                  MyBackgroundImage={planet.Image_Link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="booking-sub-title">Flights Schedule</div>
      <div className="booking-page">
        <div className="disScrolling">
          <div className="discontainer">
            <div class="discard">
              <DiscoverCard />
            </div>
            <div class="discard">
              <DiscoverCard />
            </div>
            <div class="discard">
              <DiscoverCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
