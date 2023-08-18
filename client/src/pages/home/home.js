import React from "react";
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
import NewCard from "../../components/Aluthcardeka/new_card";
const Home = () => {
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
            <div class="discard">
              <DiscoverCard text={"Mars"} />
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
