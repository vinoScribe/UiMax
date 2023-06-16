import React, { useState } from "react";
import "../stylesheet/publicReview.scss";

const ModuleComponent = ({ type, selectPremium, getCycle }) => {
  const loadedFeature = (
    <div className="features_in_given_plan">
      <ul>
        <li className="selected selected_with_white fullySupported">
          Unlimited product updates
        </li>
        <li className="selected selected_with_white fullySupportede">
          Unlimited Shares
        </li>
        <li className="selected selected_with_white fullySupported">
          Every feature in Figmaland
        </li>
        <li className="notSelected selected_with_white fullySupported">
          1GB Cloud storage
        </li>
        <li className="notSelected fullySupported">
          Email and community support
        </li>
      </ul>
    </div>
  );

  return (
    <div className="planInfo_container">
      <div className="plan_desc">
        <h3>{type.plan}</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="cost_of_plan">
        <h1>{selectPremium}</h1>
        <h3>$</h3>
        <p>Per {getCycle}</p>
      </div>

      {loadedFeature}

      <button type="button">Order Now</button>
    </div>
  );
};

export default ModuleComponent;
