import React from "react";
import "./aboutStyle.scss";

const AboutWelcomePage = () => {
  return (
    <div className="aboutWelcomePage main_header">
      <div className="aboutWelcomePageContent">
        <div>
          <h3>ABOUT</h3>
          <h1>
            A feisty group of <span>change makers</span>
          </h1>
        </div>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="aboutWelcomePage_imgsrc" />
    </div>
  );
};

export default AboutWelcomePage;
