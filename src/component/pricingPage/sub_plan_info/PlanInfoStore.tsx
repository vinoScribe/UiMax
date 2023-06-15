import React from "react";
import ModulePlanType from "./ModulePlanType";

const PlanInfoStore = () => {
  const planList = [
    {
      plan: "FREE",
      price: 0,
      cycle: ["Month", "Year"],
    },
    {
      plan: "STANDARD",
      price: 10,
      cycle: ["Month", "Year"],
    },
    {
      plan: "BUSINESS",
      price: 99,
      cycle: ["Month", "Year"],
    },
  ];
  return (
    <>
      {planList.map((type, index) => {
        return <ModulePlanType type={type} key={index} />;
      })}
    </>
  );
};

export default PlanInfoStore;
