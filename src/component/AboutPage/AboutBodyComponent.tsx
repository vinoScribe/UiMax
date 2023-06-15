import React from "react";
import ImageModuleAbout from "./ImageModuleAbout";
import "./stylesheet/aboutBodyComponent.scss";

const AboutBodyComponent = () => {
  return (
    <div className="aboutBodyComponent">
      <div className="title">
        <h2>We glow all the way up</h2>
        <p>
          Ever wondered if you're too reliant on a client for work? Slate helps
          you identify when you need to diversify your client base.
        </p>
      </div>
      <div className="peopleInterest">
        <ImageModuleAbout />
      </div>
    </div>
  );
};

export default AboutBodyComponent;
