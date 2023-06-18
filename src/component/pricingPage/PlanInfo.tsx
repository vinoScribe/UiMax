import React, { useState } from "react";
import "./stylesheet/planInfo.scss";
import ModulePlan from "./sub_plan_info/ModulePlan";
import { useDispatch, useSelector } from "react-redux";

const PlanInfo = () => {
  const dispatch = useDispatch();
  const dataRetriever = useSelector((state: any) => state);

  const getAnnualPlan = () => {
    dispatch({ type: "ANNUAL_PREMIUM" });
  };
  const getMonthlyPlan = () => {
    dispatch({ type: "MONTHLY_PREMIUM" });
  };

  const [cycle, setCycle] = useState("Month");

  const updatedMonthlyCycle = () => {
    setCycle("Month");
  };

  const updatedAnualCycle = () => {
    setCycle("Year");
  };

  return (
    <div className="planInfo">
      <div className="togglePlan">
        <button
          type="button"
          onClick={getMonthlyPlan}
          onClickCapture={updatedMonthlyCycle}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={getAnnualPlan}
          onClickCapture={updatedAnualCycle}
        >
          Yearly (save 20%)
        </button>
      </div>
      <div className="planSelectionContainer">
        <ModulePlan planUpdate={dataRetriever} getCycle={cycle} />
      </div>
    </div>
  );
};

export default PlanInfo;
