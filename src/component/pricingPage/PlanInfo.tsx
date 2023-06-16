import React from "react";
import "./stylesheet/planInfo.scss";
import ModulePlan from "./sub_plan_info/ModulePlan";
import { useDispatch, useSelector } from "react-redux";

const PlanInfo = () => {
  const dispatch = useDispatch();
  const dataRetriever = useSelector((state: any) => state.initialState);
  console.log(dataRetriever);

  const annualPlan = () => {
    dispatch({ type: "ANNUAL_PREMIUM" });
  };
  const monthlyPlan = () => {
    dispatch({ type: "MONTHLY_PREMIUM" });
  };

  return (
    <div className="cost_info">
      <div className="toggle_plan">
        <button type="button" onClick={monthlyPlan}>
          Monthly
        </button>
        <button type="button" onClick={annualPlan}>
          Yearly (save 20%)
        </button>
      </div>
      <div className="select_plan">
        <ModulePlan planUpdate={dataRetriever} />
      </div>
    </div>
  );
};

export default PlanInfo;
