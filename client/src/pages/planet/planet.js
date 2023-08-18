import React from "react";
import "./planet.css"; // Import the corresponding CSS file
import BackImage from "../../components/backdrop/backimage";
import PinkButton from "../../components/button/button";
import MyBackgroundImage from "../../pages/planet/Mars1.gif";
import NewCard from "../../components/Aluthcardeka/new_card";
import ConditionCard from "../../components/conditionCard/conditionCard";

const Planet = () => {
  return (
    <div>
      <BackImage MyBackgroundImage={MyBackgroundImage} />
      <div className="void"></div>
      <div className="booking-heading">MARS</div>
      <div className="booking-sub-heading">
        Mars is a symbol of humanity's unbreakable spirit. Mars has evolved from
        a far-off fantasy into a thriving home, where daring explorers are now
        living after taking on the challenge of adjusting to its rust-colored
        landscapes. This red frontier offers a look into a future when
        innovation and human resilience join to create another world our own,
        complete with huge domed cities and cutting-edge terraforming.
        <PinkButton text={"Read Mpre"} />
      </div>
      <div className="booking-heading">Tourist Atraction</div>
      <div className="booking-page">
        <div className="class-Scrolling">
          <div className="class-container">
            <div class="card">
              <NewCard
                imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
                title="Hey There"
                text="Discover the Red Planet. Unveil the Mysteries of Mars"
              />
              <NewCard
                imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
                title="Hey There"
                text="Discover the Red Planet. Unveil the Mysteries of Mars"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="booking-heading">Planet Conditions</div>
      <div>
        <ConditionCard />
      </div>
      <div className="booking-heading">Flight Schedule</div>
      <div className="booking-page">
        <div className="class-Scrolling">
          <div className="class-container">
            <div class="card">
              <NewCard
                imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
                title="Hey There"
                text="Discover the Red Planet. Unveil the Mysteries of Mars"
              />
              <NewCard
                imageUrl="https://wallpaperaccess.com/full/3136563.jpg"
                title="Hey There"
                text="Discover the Red Planet. Unveil the Mysteries of Mars"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
