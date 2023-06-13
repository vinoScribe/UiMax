import React from "react";
import PerformanceIcon from "../commonComponentImage/performanceIcon.png";

const performanceFeature = () => {
  return (
    <div className="performace_feature">
      <img src={PerformanceIcon} alt="top feature icon" />
      <h3>Performance</h3>
      <p>
        Slate helps you see how many more days you need to work to reach your
        financial goal
      </p>
      <a href="#">Learn more</a>
    </div>
  );
};

export default performanceFeature;
