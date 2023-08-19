import React from "react";
import "./landing.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../components/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../components/paymentInfo/payInfo";
import PinkButton from "../../components/button/button";
import SeatView from "../../components/seatView/seat";
import PriceSummary from "../../components/paymentSummary/test";
import MyBackgroundImage from "../../pages/landing/daniel-olah-HNkgPFBShSw-unsplash1.jpg";
import PlanetImage from "./planet-astronomy.jpg";
import Search from "../../components/search/search";
import DiscoverCard from "../../components/discoverCard/discover";
const Landing = () => {
  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="landing-heading">SpaceXplore</div>
      <div className="landing-sub-title">
        Embark on the Journey of a Lifetime... Secure Your Seat Beyond the Stars
        with Our Inter Space Shuttle Experience!
      </div>
      <div className="landing-button">
        <PinkButton text={"Get Started"} size={20} />
      </div>

      <img src={PlanetImage} alt="planet" width="100%" />
      <div className="landing-sub-title">
        Fueling Curiosity, One Ticket to the Cosmos at a Time... Explore the
        Universe with Us!
      </div>
      <div className="landing-button">
        <PinkButton text={"Learn More"} size={20} />
      </div>
      <div className="landing-sub-heading">Discover More</div>
      <div className="booking-page">
        <div className="disScrolling">
          <div className="discontainer">
            <div class="discard">
              <DiscoverCard text={"Flights"} />
            </div>
            <div class="discard">
              <DiscoverCard text={"Team"} />
            </div>
            <div class="discard">
              <DiscoverCard text={"Services"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
