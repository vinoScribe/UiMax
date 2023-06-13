import React from "react";
import Content from "../commonComponentImage/content.png";

const contentFeature = () => {
  return (
    <div className="content_feature">
      <img src={Content} alt="top feature icon" />
      <h3>Content</h3>
      <p>
        Slate helps you see how many more days you need to work to reach your
        financial goal
      </p>
      <a href="#">Learn more</a>
    </div>
  );
};

export default contentFeature;
