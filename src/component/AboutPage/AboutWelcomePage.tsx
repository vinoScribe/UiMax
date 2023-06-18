import React from "react";
import "./stylesheet/aboutWelcomepage.scss";

const AboutWelcomePage = () => {
  return (
    <div className="aboutWelcomePage">
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
      <div className="aboutWelcomePage_bg" />
    </div>
  );
};

export default AboutWelcomePage;
