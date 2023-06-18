import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import ReduxStore from "./component/pricingPage/storeManager/ReduxStore";

const Root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
Root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
