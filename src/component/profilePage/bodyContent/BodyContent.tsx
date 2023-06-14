import React from "react";
import FeatureHeading from "./FeatureHeading";
import ImageModule from "./ImageModule";
import "./authorBodyStyle.scss";

const BodyPage = () => {
  return (
    <div className="featureCard">
      <FeatureHeading />
      <ImageModule />
    </div>
  );
};

export default BodyPage;
