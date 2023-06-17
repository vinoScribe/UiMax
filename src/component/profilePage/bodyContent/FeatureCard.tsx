import React from "react";

function FeatureCard({ image }) {
  return (
    <div className="featureCardItem">
      <img src={image} alt="card" />
      <div className="cardContent">
        <h3>Full Time</h3>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <input type="button" value="Try for Free" />
      </div>
    </div>
  );
}

export default FeatureCard;
