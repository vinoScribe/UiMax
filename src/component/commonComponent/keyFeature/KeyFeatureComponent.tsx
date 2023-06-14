import React from "react";
import "./keyFeature.scss";
import KeyFeature from "./KeyFeature";
import SpeedyPlugins from "../commonComponentImage/speedy_plugins.png";
import HandyPlugins from "../commonComponentImage/handly_plugins.png";
import ModularPlugins from "../commonComponentImage/ic_round-restaurant-menu.png";

const KeyFeatureComponent = () => {
  const keyFeatureTitle = [
    "A modular UI kit",
    "Handy plugins",
    "Speedy build tools",
  ];
  const keyFeatureLogo = [SpeedyPlugins, HandyPlugins, ModularPlugins];

  return (
    <div className="key_feature">
      {keyFeatureTitle.map((keyFeatureTitle, index) => {
        return (
          <KeyFeature
            key={index}
            getTitle={keyFeatureTitle}
            imageSrc={keyFeatureLogo[index]}
          />
        );
      })}
    </div>
  );
};

export default KeyFeatureComponent;
