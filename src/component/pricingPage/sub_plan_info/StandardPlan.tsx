import React from "react";

const StandardPlan = () => {
  return (
    <div id="standard_plan">
      <div className="plan_desc">
        <h3>STANDARD</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="cost_of_plan">
        <h1>10</h1>
        <h3>$</h3>
        <p>Per Month</p>
      </div>
      <div className="features_in_given_plan">
        <ul>
          <li className="selected_with_white">Unlimited product updates</li>
          <li className="selected_with_white">Unlimited Shares</li>
          <li className="selected_with_white">Every feature in Figmaland</li>
          <li className="selected_with_white">1GB Cloud storage</li>
          <li className="notSelected">Email and community support</li>
        </ul>
      </div>
      <button type="button">Order Now</button>
    </div>
  );
};

export default StandardPlan;
