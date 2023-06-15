import React, { useState } from "react";
import "../stylesheet/publicReview.scss";

const ModuleComponent = ({ type }) => {
  const premium = type.price;
  const offer = premium - (premium * 20) / 100;
  const [monthlyPrem, setAnnualPrem] = useState(premium);

  const getAnnualPrem = () => {
    setAnnualPrem(offer.toFixed(0));
  };

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
        <h1 onClick={getAnnualPrem}>{monthlyPrem}</h1>
        <h3>$</h3>
        <p>Per {type.cycle[0]}</p>
      </div>

      {loadedFeature}

      <button type="button">Order Now</button>
    </div>
  );
};

export default ModuleComponent;
