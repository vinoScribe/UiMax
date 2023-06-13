import React from "react";
import DesignFeature from "./topFeature/Design";
import PerformanceFeature from "./topFeature/Performance";
import ContentFeature from "./topFeature/Content";
import "./commonComponentStyle.scss";

const topFeatureIntheApp = () => {
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
        <DesignFeature />
        <PerformanceFeature />
        <ContentFeature />
      </div>
    </div>
  );
};

export default topFeatureIntheApp;
