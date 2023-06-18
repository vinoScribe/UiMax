import React from "react";
import Content from "../commonComponentImage/content.png";
import Design from "../commonComponentImage/gorgeousDesign.png";
import PerformancePoster from "../commonComponentImage/performanceIcon.png";
import FeatureCards from "./FeatureCards";

const featureCardItems = [
  {
    id: 1,
    featureCard_bg: Design,
    title: "Gorgeous Design",
  },
  {
    id: 2,
    featureCard_bg: PerformancePoster,
    title: "Performance",
  },
  {
    id: 3,
    featureCard_bg: Content,
    title: "Content",
  },
];

const FeatureCardImageModule = () => {
  return (
    <div className="img">
      {featureCardItems.map((details) => {
        return (
          <FeatureCards
            key={details.id}
            image={details.featureCard_bg}
            heading={details.title}
          />
        );
      })}
    </div>
  );
};

export default FeatureCardImageModule;
