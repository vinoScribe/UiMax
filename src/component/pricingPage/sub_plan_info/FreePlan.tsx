import React from "react";

const FreePlan = () => {
  return (
    <div id="free_plan">
      <div className="plan_desc">
        <h3>FREE</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="cost_of_plan">
        <h1>0</h1>
        <h3>$</h3>
        <p>Per Month</p>
      </div>
      <div className="features_in_given_plan">
        <ul>
          <li className="selected">Unlimited product updates</li>
          <li className="selected">Unlimited Shares</li>
          <li className="selected">Every feature in Figmaland</li>
          <li className="notSelected">1GB Cloud storage</li>
          <li className="notSelected">Email and community support</li>
        </ul>
      </div>
      <button type="button">Order Now</button>
    </div>
  );
};

export default FreePlan;
