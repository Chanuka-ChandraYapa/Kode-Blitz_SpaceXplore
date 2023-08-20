import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./yet.css"; // Import the corresponding CSS file
import BackImage from "../../utils/backdrop/backimage";
import Card from "../../components/class card/card";
import EnterDetails from "../../templates/NumberofPassengers/enterDetails";
import Footer from "../../components/footer/footer";
import PaymentInfo from "../../templates/paymentInfo/payInfo";
import PinkButton from "../../utils/button/button";
import SeatView from "../../templates/seatView/seat";
import PriceSummary from "../../templates/paymentSummary/test";
import MyBackgroundImage from "../../pages/home/marcelo-quinan-R3pUGn5YiTg-unsplash.jpg";
import Search from "../../components/search/search";
import DiscoverCard from "../../components/discoverCard/discover";
const API_BASE_URL = "http://localhost:5000";

const Yet = () => {
  return (
    <div>
      <div className="void"></div>
      <div className="yet-heading">Not yet Implemented 😌</div>
    </div>
  );
};

export default Yet;
