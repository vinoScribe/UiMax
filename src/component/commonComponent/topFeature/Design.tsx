import React from "react";
import GorgeousDesign from "../commonComponentImage/gorgeousDesign.png";

const desginFeature = () => {
  return (
    <div className="gorgeous_design_feature">
      <img src={GorgeousDesign} alt="top feature icon" />
      <h3>Gorgeous design</h3>
      <p>
        Slate helps you see how many more days you need to work to reach your
        financial goal
      </p>
      <a href="#">Learn more</a>
    </div>
  );
};

export default desginFeature;
