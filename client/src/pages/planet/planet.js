import React from "react";
import "./planet.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import PinkButton from "../../components/button/button";
import MyBackgroundImage from "../../pages/planet/Mars1.gif";
import ConditionCard from "../../components/conditionCard/conditionCard";
import DiscoverCard from "../../components/discoverCard/discover";
import ReviewCard from "../../components/ReviewCard/review";
// import profileImage from "../../pages/planet/dfe0f555e474618662061ef417bb441a.jpg";

const Planet = () => {
  return (
    <div className="planet-container">
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="planet-heading">MARS</div>
      <div className="planet-sub-heading">
        Mars is a symbol of humanity's unbreakable spirit. Mars has evolved from
        a far-off fantasy into a thriving home, where daring explorers are now
        living after taking on the challenge of adjusting to its rust-colored
        landscapes. This red frontier offers a look into a future when
        innovation and human resilience join to create another world our own,
        complete with huge domed cities and cutting-edge terraforming.
      </div>
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
