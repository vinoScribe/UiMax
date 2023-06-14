import React, { useState } from "react";
import ModuleComponent from "./ModuleComponent";
import "../priceStyle.scss";
import PlanInfo from "../PlanInfo";

const ModulePlan = () => {
  const typeOfPlan = ["Free Plan", "Standard Plan", "Business Plan"];
  const [price, setPrice] = useState([0, 10, 99]);

  const updateToYearly = () => {
    setPrice([0, 8, 80]);
  };

  return (
    <div className="planType">
      {typeOfPlan.map((plan, index) => {
        return <ModuleComponent type={plan} key={index} price={price[index]} />;
      })}
    </div>
  );
};

export default ModulePlan;
