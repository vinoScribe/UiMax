import React, { useState } from "react";
import "../stylesheet/publicReview.scss";
import PlanInfoModule from "./PlanInfoStore";

const ModulePlan = () => {
  return (
    <div className="planType">
      <PlanInfoModule />
    </div>
  );
};

export default ModulePlan;
