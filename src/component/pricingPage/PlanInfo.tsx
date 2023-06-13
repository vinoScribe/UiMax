import React from "react";
import "./priceStyle.scss";
import FreePlan from "./sub_plan_info/FreePlan";
import StandardPlan from "./sub_plan_info/StandardPlan";
import BusinessPlan from "./sub_plan_info/BusinessPlan";
import { Provider } from "react-redux";
import ProductPriceStore from "./storeManager/ProductPriceStore";

const PlanInfo = () => {
  return (
    <div className="cost_info">
      <div className="toggle_plan">
        <button type="button">Monthly</button>
        <button type="button">Yearly (save 20%)</button>
      </div>
      <div className="select_plan">
        <Provider store={ProductPriceStore}>
          <FreePlan />
          <StandardPlan />
          <BusinessPlan />
        </Provider>
      </div>
    </div>
  );
};

export default PlanInfo;
