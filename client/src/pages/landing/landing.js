import React from "react";
import "./landing.css"; // Import the corresponding CSS file
import BackImage from "../../utils/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../templates/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../templates/paymentInfo/payInfo";
import PinkButton from "../../utils/button/button";
import SeatView from "../../templates/seatView/seat";
import PriceSummary from "../../templates/paymentSummary/test";
import MyBackgroundImage from "../../pages/landing/daniel-olah-HNkgPFBShSw-unsplash1.jpg";
import PlanetImage from "./planet-astronomy.jpg";
import flightImage from "../../pages/landing/flight.jpeg";
import TeamImage from "../../pages/landing/team.jpeg";
import ServiceImage from "../../pages/landing/services.jpeg";
import Search from "../../components/search/search";
import DiscoverCard from "../../components/discoverCard/discover";
/**
 * The Landing component is a functional component in JavaScript that renders a landing page for a
 * website called SpaceXplore.
 * @returns The Landing component is returning a JSX element, which is a div containing various
 * elements such as images, text, and buttons.
 */
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
      <a className="landing-button" href="/signUp">
        <PinkButton text={"Get Started"} size={20} />
      </a>

      <img src={PlanetImage} alt="planet" width="100%" />
      <div className="landing-sub-title">
        Fueling Curiosity, One Ticket to the Cosmos at a Time... Explore the
        Universe with Us!
      </div>
      <a className="landing-button" href="/about">
        <PinkButton text={"Learn More"} size={20} />
      </a>
      <div className="landing-sub-heading">Discover More</div>
      <div className="booking-page">
        <div className="landScrolling">
          <div className="landcontainer">
            <a class="landcard" href="/flights">
              <DiscoverCard
                planetName={"Flights"}
                MyBackgroundImage={flightImage}
              />
            </a>
            <div class="landcard">
              <DiscoverCard planetName={"Team"} MyBackgroundImage={TeamImage} />
            </div>
            <div class="landcard">
              <DiscoverCard
                planetName={"Services"}
                MyBackgroundImage={ServiceImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
