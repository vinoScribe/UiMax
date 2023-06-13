import React from "react";
import "./contactStyle.scss";
import SocialMedia from "../commonComponent/SocialMedia";

const GetInTouch = () => {
  return (
    <div className="getInTouch">
      <h2>Get in touch</h2>
      <div className="about">
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <SocialMedia />
    </div>
  );
};

export default GetInTouch;
