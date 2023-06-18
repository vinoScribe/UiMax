import React from "react";
import FeatureHeading from "./FeatureHeading";
import FeatureCardContainer from "./FeatureCardContainer";
import "./authorBodyStyle.scss";

const ProfileBody = () => {
  return (
    <div className="featuresOfProfileBody">
      <FeatureHeading />
      <FeatureCardContainer />
    </div>
  );
};

export default ProfileBody;
