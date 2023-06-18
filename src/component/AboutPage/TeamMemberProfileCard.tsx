import React from "react";
import "./stylesheet/aboutBodySection.scss";

const TeamMemberProfileCard = ({ profilerName, profilePhoto }) => {
  return (
    <div className="teamMemberProfile">
      <div className="profilePhoto">
        <img src={profilePhoto} alt="member of our team" />
      </div>
      <div className="profileDesc">
        <h3>Calvin Cooper</h3>
        <h5>{profilerName}</h5>
        <p>Slate helps you see how many more days to work</p>
      </div>
    </div>
  );
};

export default TeamMemberProfileCard;
