import React from "react";
import "./stylesheet/modularKit.scss";

const ModularKit = () => {
  return (
    <div className="modular_kit">
      <h2>A modular UI Kit</h2>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="modular_kit_btn">
        <button type="button">Buy now</button>
        <button type="button">Try for free</button>
      </div>
    </div>
  );
};

export default ModularKit;
