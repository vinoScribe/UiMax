import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
