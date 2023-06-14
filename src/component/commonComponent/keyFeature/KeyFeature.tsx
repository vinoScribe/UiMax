import React from "react";
import "./keyFeature.scss";

const KeyFeature = ({ getTitle, imageSrc }) => {
  return (
    <div className="key_feature_module">
      <div className="feature_headline">
        <img src={imageSrc} alt="key-feature logo" />
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
