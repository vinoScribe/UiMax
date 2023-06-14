import React from "react";
import "./priceStyle.scss";
import { Provider } from "react-redux";
import ProductPriceStore from "./storeManager/ProductPriceStore";
import ModulePlan from "./sub_plan_info/ModulePlan";

const PlanInfo = () => {
  return (
    <div className="cost_info">
      <div className="toggle_plan">
        <button type="button">Monthly</button>
        <button type="button">Yearly (save 20%)</button>
      </div>
      <div className="select_plan">
        <Provider store={ProductPriceStore}>
          <ModulePlan />
        </Provider>
      </div>
    </div>
  );
};

export default PlanInfo;
