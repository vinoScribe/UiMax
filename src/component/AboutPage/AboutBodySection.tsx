import React from "react";
import TeamMembersGrid from "./TeamMembersGrid";
import "./stylesheet/aboutBodySection.scss";

const AboutBodySection = () => {
  return (
    <div className="aboutBodySection">
      <div className="titleOfBody">
        <h2>We glow all the way up</h2>
        <p>
          Ever wondered if you're too reliant on a client for work? Slate helps
          you identify when you need to diversify your client base.
        </p>
      </div>
      <div className="teamMembers">
        <TeamMembersGrid />
      </div>
    </div>
  );
};

export default AboutBodySection;
