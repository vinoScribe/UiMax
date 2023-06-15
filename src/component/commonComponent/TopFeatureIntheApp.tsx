import React from "react";
import FeatureCardImageModule from "./topFeature/FeatureCardImageModule";
import "./stylesheet/topFeatures.scss";

const TopFeatureIntheApp = () => {
  return (
    <div className="top_features_app">
      <div className="feature_content">
        <h2>AMAZING FEATURES</h2>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="amazing_feature_component">
        <FeatureCardImageModule />
      </div>
    </div>
  );
};

export default TopFeatureIntheApp;
