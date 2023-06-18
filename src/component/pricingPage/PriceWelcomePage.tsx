import React from "react";
import "./stylesheet/aboutPrice.scss";

const PriceWelcomePage = () => {
  return (
    <div className="priceWelcomePage">
      <div className="contentOfWelcomePage">
        <h3>PRICING</h3>
        <h1>
          Pricing that <span>scales with you</span>
        </h1>
      </div>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
    </div>
  );
};

export default PriceWelcomePage;
