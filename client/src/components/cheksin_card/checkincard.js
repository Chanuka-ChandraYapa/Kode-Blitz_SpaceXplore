import React from "react";
import "./checkincard.css";

const Checkincard = () => {
  return (
    <div className="box">
      <div className="card">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">3 Weeks ago</div>
          <p className="virendra-chronicles">
            &#34;Virendra: Chronicles of a Celestial Odyssey&#34;
          </p>
          <p className="div">
            Where the stars paint tales of ancient dreams across the cosmic
            canvas.
          </p>
          <img
            className="mask-group"
            alt="Mask group"
            src="https://generation-sessions.s3.amazonaws.com/fb7819ec8d441b5cee84af441f351c4f/img/mask-group-1@2x.png"
          />
          <div className="text-wrapper-2">Virendra</div>
        </div>
      </div>
    </div>
  );
};

export default Checkincard;