import React from "react";
import "./keyFeature.scss";

const KeyFeature = ({ getTitle, keyfeature_bg }) => {
  return (
    <div className="keyFeatureContainer">
      <div className="featureHeadline">
        <img src={keyfeature_bg} alt="Feature logo" />
        <h3>{getTitle}</h3>
      </div>
      <p>
        Slate helps you see how many more days you need to work to reach your
        financial goal.
      </p>
    </div>
  );
};

export default KeyFeature;
