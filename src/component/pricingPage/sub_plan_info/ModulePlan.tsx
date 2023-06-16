import React from "react";
import "../stylesheet/publicReview.scss";
import PlanInfoStore from "./PlanInfoStore";

const ModulePlan = ({ planUpdate }) => {
  return (
    <div className="planType">
      <PlanInfoStore getPlan={planUpdate} />
    </div>
  );
};

export default ModulePlan;
