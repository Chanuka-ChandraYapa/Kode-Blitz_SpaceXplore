/**
 * The `ConditionCard` component is a React component that renders a card with various images and text.
 * @returns The `ConditionCard` component is returning a JSX structure that represents a card with
 * various elements such as text, images, and a button.
 */
import React from "react";
import "./conditionCard.css";
import PinkButton from "../../utils/button/button";

const ConditionCard = () => {
  return (
    <div className="box">
      <div className="condtion-card">
        <div className="overlap-group">
          <div className="text-wrapper">Advanced Terraforming</div>
          <div className="div">Better Tourism</div>
          <img
            className="simple-icons-oxygen"
            alt="Simple icons oxygen"
            src="https://generation-sessions.s3.amazonaws.com/91e24cd171b1cae9fcd18c3e52269a97/img/simple-icons-oxygen.svg"
          />
          <img
            className="tabler-trees"
            alt="Tabler trees"
            src="https://generation-sessions.s3.amazonaws.com/91e24cd171b1cae9fcd18c3e52269a97/img/tabler-trees.svg"
          />
          <img
            className="ic-baseline-travel"
            alt="Ic baseline travel"
            src="https://generation-sessions.s3.amazonaws.com/91e24cd171b1cae9fcd18c3e52269a97/img/ic-baseline-travel-explore.svg"
          />
          <div className="text-wrapper-2">Clean Oxygen</div>
          <div className="overlap">
            <div className="register-b" />
            <PinkButton text={"See Our Complete Guide"} size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionCard;
