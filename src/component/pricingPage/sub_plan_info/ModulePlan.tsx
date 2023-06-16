import React from "react";
import "../stylesheet/publicReview.scss";
import PlanInfoStore from "./PlanInfoStore";

const ModulePlan = ({ planUpdate, getCycle }) => {
  return (
    <div className="planType">
      <PlanInfoStore getPlan={planUpdate} getCycle={getCycle} />
    </div>
  );
};

export default ModulePlan;
