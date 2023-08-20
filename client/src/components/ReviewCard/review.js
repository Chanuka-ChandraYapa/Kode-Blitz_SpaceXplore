/**
 * The ReviewCard component is a React component that displays a review with a profile image and name.
 * @returns The ReviewCard component is being returned.
 */
import React from "react";
import "./review.css";

const ReviewCard = ({ name, profileImage, review }) => {
  return (
    <div className="review-card">
      <div className="profile-image">
        <img src={profileImage} alt={`${name}'s Profile`} />
      </div>
      <p className="review">{review}</p>
      <p className="name">{name}</p>
    </div>
  );
};

export default ReviewCard;
