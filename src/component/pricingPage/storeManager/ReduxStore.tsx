import { configureStore } from "@reduxjs/toolkit";

interface DEFINE_INITIALSTATE {
  plan: string;
  price: number;
  cycle: [string, string];
}

const initialState: DEFINE_INITIALSTATE[] = [
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

const rootReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "MONTHLY_PREMIUM": {
      return state.map((planInfo) => Number(planInfo.price));
    }
    case "ANNUAL_PREMIUM": {
      return state.map((planInfo) => {
        const offerPrice = planInfo.price - (planInfo.price * 20) / 100;
        return Number(offerPrice.toFixed(0));
      });
    }
    default: {
      return state;
    }
  }
};

const ReduxStore = configureStore({ reducer: rootReducer });

export default ReduxStore;
