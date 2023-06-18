import React from "react";
import FeatureCardImageModule from "./topFeature/FeatureCardImageModule";
import "./stylesheet/topFeatures.scss";

const TopFeatureIntheApp = () => {
  return (
    <div className="topFeaturesInTheApp">
      <div className="featureContent">
        <h2>AMAZING FEATURES</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="amazingFeatures">
        <FeatureCardImageModule />
      </div>
    </div>
  );
};

export default TopFeatureIntheApp;
