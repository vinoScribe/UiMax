import React from "react";
import Content from "../commonComponentImage/content.png";
import Design from "../commonComponentImage/gorgeousDesign.png";
import PerformancePoster from "../commonComponentImage/performanceIcon.png";
import ContentFeature from "./FeatureCards";

const FeatureCardImageModule = () => {
  const imgSrc = [Design, PerformancePoster, Content];
  const titleOfImageSrc = ["Gorgeous Design", "Performance", "Content"];
  return (
    <div className="img">
      {imgSrc.map((img, index) => {
        return (
          <ContentFeature
            key={index}
            image={img}
            heading={titleOfImageSrc[index]}
          />
        );
      })}
    </div>
  );
};

export default FeatureCardImageModule;
