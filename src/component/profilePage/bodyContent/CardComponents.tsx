import React from "react";

function CardComponents({ image }) {
  return (
    <div className="card-section">
      <img src={image} alt="" />
      <div className="text-content">
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

export default CardComponents;
