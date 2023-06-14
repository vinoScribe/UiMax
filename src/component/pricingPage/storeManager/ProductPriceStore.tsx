import { configureStore } from "@reduxjs/toolkit";

const initialstate: { plan: string; price: number }[] = [
  {
    plan: "BusinessPlan",
    price: 99,
  },
  {
    plan: "FreePlan",
    price: 0,
  },
  { plan: "StandardPlan", price: 10 },
];

const rootReducer = (state = { initialstate }, action: any) => {
  switch (action.type) {
    case "Business plan": {
      const businessPlan = state.initialstate.find((findPrice) => {
        return findPrice.plan === "BusinessPlan";
      });
      return {
        initialstate: businessPlan ? businessPlan.price : 0,
      };
    }

    case "Free plan": {
      const freePlan = state.initialstate.find((findPrice) => {
        return findPrice.plan === "FreePlan";
      });
      return {
        initialstate: freePlan ? freePlan.price : 0,
      };
    }

    case "Standard plan": {
      const standardPlan = state.initialstate.find((findPrice) => {
        return findPrice.plan === "StandardPlan";
      });
      return {
        initialstate: standardPlan ? standardPlan.price : 0,
      };
    }

    default: {
      return state;
    }
  }
};

const ProductPriceStore = configureStore({ reducer: rootReducer });

export default ProductPriceStore;
