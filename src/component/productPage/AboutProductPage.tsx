import React from "react";
import "./productStyle.scss";

const AboutProductPage = () => {
  return (
    <div className="aboutProduct main_header">
      <div>
        <h3>PRODUCT</h3>
        <h1>
          A modular UI Kit for <span>quick deployment|</span>
        </h1>
      </div>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <button type="button">Buy now</button>
    </div>
  );
};

export default AboutProductPage;
