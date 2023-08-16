import React from "react";
import "./tourReviewCard.css"; // Make sure to import your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // Add this line to import Font Awesome styles

const TourReviewCard = () => {
  return (
    <div className="tour-review-card">
      <div className="tour-review-content">
        <p className="review-text">
          {/* Replace this with your review text */}
          Mars was an otherworldly adventure! Walking through Valoris City's
          transparent dome, I felt like I was on the surface of another planet.
          The Martian landscapes, the stunning night sky, and the palpable sense
          of human achievement left me in awe.
        </p>
        <div className="star-rating">
          {/* Use "fas" class for solid star icons */}
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <div className="avatar">
        {/* Add avatar image here */}
        <img src="avatar1.png" alt="User Avatar" />
      </div>
    </div>
  );
};

export default TourReviewCard;
