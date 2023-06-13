import React from "react";
import "./commonComponentStyle.scss";

///first component
const KeyFeature = () => {
  const ModularKit = () => {
    return (
      <div id="modular_kit_feature">
        <h3>
          <span id="modular_logo" />A modular UI kit
        </h3>
        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
      </div>
    );
  };

  ///second component
  const HandyPlugins = () => {
    return (
      <div id="handy_plugins_feature">
        <h3>
          <span id="handy_logo" />
          Handy plugins
        </h3>
        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
      </div>
    );
  };

  ///third component
  const SpeedyBuild = () => {
    return (
      <div id="speed_build_feature">
        <h3>
          <span id="speedy_logo" />
          Speedy build tools
        </h3>
        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
      </div>
    );
  };

  ///rooter
  return (
    <div className="key_feature">
      <ModularKit />
      <HandyPlugins />
      <SpeedyBuild />
    </div>
  );
};

export default KeyFeature;
