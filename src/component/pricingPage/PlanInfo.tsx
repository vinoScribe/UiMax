import React, { useState } from "react";
import "./stylesheet/planInfo.scss";
import ModulePlan from "./sub_plan_info/ModulePlan";
import { useDispatch, useSelector } from "react-redux";

const PlanInfo = () => {
  const dispatch = useDispatch();
  const dataRetriever = useSelector((state: any) => state);

  const annualPlan = () => {
    dispatch({ type: "ANNUAL_PREMIUM" });
  };
  const monthlyPlan = () => {
    dispatch({ type: "MONTHLY_PREMIUM" });
  };

  const [cycle, setCycle] = useState("Month");

  return (
    <div className="cost_info">
      <div className="toggle_plan">
        <button
          type="button"
          onClick={monthlyPlan}
          onClickCapture={() => {
            setCycle("Month");
          }}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={annualPlan}
          onClickCapture={() => {
            setCycle("Year");
          }}
        >
          Yearly (save 20%)
        </button>
      </div>
      <div className="select_plan">
        <ModulePlan planUpdate={dataRetriever} getCycle={cycle} />
      </div>
    </div>
  );
};

export default PlanInfo;
