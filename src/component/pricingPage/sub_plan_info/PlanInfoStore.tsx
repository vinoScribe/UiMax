import React from "react";
import ModulePlanType from "./ModulePlanType";

const PlanInfoStore = ({ getPlan, getCycle }) => {
  const planList = [
    {
      plan: "FREE",
    },
    {
      plan: "STANDARD",
    },
    {
      plan: "BUSINESS",
    },
  ];
  return (
    <>
      {planList.map((type, index) => {
        return (
          <ModulePlanType
            type={type}
            key={index}
            selectPremium={getPlan[index]}
            getCycle={getCycle}
          />
        );
      })}
    </>
  );
};

export default PlanInfoStore;
