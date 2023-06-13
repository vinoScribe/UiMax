import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

const BusinessPlan = () => {
  const dispatch = useDispatch();
  const planDetails = () => {
    dispatch({ type: "Business plan" });
  };

  const dataRetriever = useSelector(
    (state: { initialState: number }) => state.initialState
  );

  console.log(dataRetriever);

  return (
    <div id="business_plan">
      <div className="plan_desc">
        <h3>BUSINESS</h3>
        <p>Organize across all apps by hand</p>
      </div>
      <div className="cost_of_plan">
        <h1>99</h1>
        <h3>$</h3>
        <p>Per Month</p>
      </div>
      <div className="features_in_given_plan">
        <ul>
          <li className="selected">Unlimited product updates</li>
          <li className="selected">Unlimited Shares</li>
          <li className="selected">Every feature in Figmaland</li>
          <li className="selected">1GB Cloud storage</li>
          <li className="selected">Email and community support</li>
        </ul>
      </div>
      <button type="button">Order Now</button>
    </div>
  );
};

export default BusinessPlan;
