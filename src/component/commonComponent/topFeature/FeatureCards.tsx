import React from "react";

const FeatureCards = ({ image, heading }) => {
  return (
    <div className="content_feature">
      <img src={image} alt="top feature icon" />
      <h3>{heading}</h3>
      <p>
        Slate helps you see how many more days you need to work to reach your
        financial goal
      </p>
      <a href="#">Learn more</a>
    </div>
  );
};

export default FeatureCards;
