import React from "react";
import "../priceStyle.scss";

const ModuleComponent = ({ type, price }) => {
  return (
    <div className="planInfo_container">
      <div className="plan_desc">
        <h3>{type}</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="cost_of_plan">
        <h1>{price}</h1>
        <h3>$</h3>
        <p>Per Month</p>
      </div>
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
      <button type="button">Order Now</button>
    </div>
  );
};

export default ModuleComponent;
