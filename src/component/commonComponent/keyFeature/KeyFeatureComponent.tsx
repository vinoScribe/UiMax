import React from "react";
import "./keyFeature.scss";
import KeyFeature from "./KeyFeature";
import SpeedyPlugins from "../commonComponentImage/speedy_plugins.png";
import HandyPlugins from "../commonComponentImage/handly_plugins.png";
import ModularPlugins from "../commonComponentImage/ic_round-restaurant-menu.png";

const keyFeatureTitle = [
  {
    id: 1,
    logo: SpeedyPlugins,
    title: "A modular UI kit",
  },
  {
    id: 2,
    logo: HandyPlugins,
    title: "Handy plugins",
  },
  {
    id: 3,
    logo: ModularPlugins,
    title: "Speedy build tools",
  },
];

const KeyFeatureComponent = () => {
  return (
    <div className="keyFeature">
      {keyFeatureTitle.map((item) => {
        return (
          <KeyFeature
            key={item.id}
            getTitle={item.title}
            keyfeature_bg={item.logo}
          />
        );
      })}
    </div>
  );
};

export default KeyFeatureComponent;
