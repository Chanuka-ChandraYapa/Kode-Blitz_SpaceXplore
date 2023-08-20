import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./planet.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import PinkButton from "../../components/button/button";
import MyBackgroundImage from "../../pages/planet/Mars1.gif";
import ConditionCard from "../../components/conditionCard/conditionCard";
import DiscoverCard from "../../components/discoverCard/discover";
import ReviewCard from "../../components/ReviewCard/review";
// import profileImage from "../../pages/planet/dfe0f555e474618662061ef417bb441a.jpg";
const API_BASE_URL = "http://localhost:5000";

const Planet = () => {
  const { planetName } = useParams(); // Get the planetName parameter from the URL

  const [planetData, setplanetData] = useState({}); // Initialize as an object
  const [flightSchedules, setFlightSchedules] = useState([]);

  useEffect(() => {
    // Fetch planet data based on the planetName
    axios.get(`${API_BASE_URL}/planet/${planetName}`).then(({ data }) => {
      setplanetData({
        name: data.Name,
        description: data.Description,
        image: data.Image_Link,
        // Add more fields as needed
      });
      console.log(data);
    });
  }, [planetName]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/flight/${planetName}`).then(({ data }) => {
      setFlightSchedules(data);
      console.log(flightSchedules);
    });
  }, []);
  return (
    <div className="planet-container">
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="planet-heading">{planetData.name}</div>
      <div className="planet-sub-heading">{planetData.description}</div>
      <PinkButton text={"Read More"} size={18} />
      <div className="planet-sub-title">Tourist Atraction</div>
      <div className="planet-page">
        <div className="planet-dis-Scrolling">
          <div className="planet-dis-container">
            <div class="planet-dis-card">
              <DiscoverCard />
            </div>
            <div class="planet-dis-card">
              <DiscoverCard />
            </div>
            <div class="planet-dis-card">
              <DiscoverCard />
            </div>
          </div>
        </div>
      </div>
      <div className="planet-sub-title">Planet Conditions</div>
      <div className="planet-page">
        <ConditionCard />
      </div>
      <div className="planet-sub-title">Available Flights</div>
      <div className="planet-page">
        <div className="planet-dis-Scrolling">
          <div className="planet-dis-container">
            {flightSchedules.map((flightSchedule) => (
              <Link to={`/booking/${flightSchedule.Flight_ID}`}>
                <div className="discard" key={flightSchedule.Schedule_ID}>
                  {/* Render flight schedule details using DiscoverCard or a custom component */}
                  <DiscoverCard
                    text={flightSchedule.SpaceShip.Model_Name}
                    //MyBackgroundImage={flightSchedule.SpaceShip_ID}
                    subsubtext={flightSchedule.Starting_Date}
                    subsubsubtext={flightSchedule.Flight.Destination_Planet}
                    MyBackgroundImage={
                      "https://img.freepik.com/free-photo/view-futuristic-looking-spaceship_23-2150675511.jpg?t=st=1692511863~exp=1692515463~hmac=2f12d687e267be6fb81ea147761e6673194ed7712a3871f4df6cc8c7af3c1f83&w=1380"
                    }
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="planet-sub-title">Reviews</div>
      <div className="planet-page">
        <div className="planet-dis-Scrolling">
          <div className="planet-review-container">
            <div class="planet-review-card">
              <ReviewCard
                name="Sara Alwiz"
                profileImage="https://i.pinimg.com/originals/df/e0/f5/dfe0f555e474618662061ef417bb441a.png"
                review="This place is amazing! I had a great experience and would definitely recommend it."
              />
            </div>
            <div class="planet-review-card">
              <ReviewCard
                name="Sara Alwiz"
                profileImage="https://i.pinimg.com/originals/df/e0/f5/dfe0f555e474618662061ef417bb441a.png"
                review="This place is amazing! I had a great experience and would definitely recommend it."
              />
            </div>
            <div class="planet-review-card">
              <ReviewCard
                name="Sara Alwiz"
                profileImage="https://i.pinimg.com/originals/df/e0/f5/dfe0f555e474618662061ef417bb441a.png"
                review="This place is amazing! I had a great experience and would definitely recommend it."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
