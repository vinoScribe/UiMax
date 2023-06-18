import { configureStore } from "@reduxjs/toolkit";

interface INITIALSTATE_TYPE {
  plan: string;
  price: number;
  cycle: [string, string];
}

const initialState: INITIALSTATE_TYPE[] = [
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
      return initialState.map((planInfo) => planInfo.price);
    }
    case "ANNUAL_PREMIUM": {
      return initialState.map((planInfo) => {
        const offerPrice = planInfo.price * 12 - (planInfo.price * 20) / 100;
        return offerPrice.toFixed(0);
      });
    }
    default: {
      return initialState.map((planInfo) => planInfo.price);
    }
  }
};

const ReduxStore = configureStore({ reducer: rootReducer });

export default ReduxStore;
