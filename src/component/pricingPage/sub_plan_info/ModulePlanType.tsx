import React from "react";
import "../stylesheet/publicReview.scss";

const ModuleComponent = ({ type, selectPremium, getCycle }) => {
  const featuresBasedOnPlanType = (
    <div className="featuresInGivenPlan">
      <ul>
        <li className="selected selectedWithWhite fullySupported">
          Unlimited product updates
        </li>
        <li className="selected selectedWithWhite fullySupported">
          Unlimited Shares
        </li>
        <li className="selected selectedWithWhite fullySupported">
          Every feature in Figmaland
        </li>
        <li className="notSelected selectedWithWhite fullySupported">
          1GB Cloud storage
        </li>
        <li className="notSelected fullySupported">
          Email and community support
        </li>
      </ul>
    </div>
  );

  return (
    <div className="planInfoCard">
      <div className="planHeader">
        <h3>{type.plan}</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="costOfPlan">
        <h1>{selectPremium}</h1>
        <h3>$</h3>
        <p>Per {getCycle}</p>
      </div>

      {featuresBasedOnPlanType}

      <button type="button">Order Now</button>
    </div>
  );
};

export default ModuleComponent;
