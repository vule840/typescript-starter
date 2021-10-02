import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextApiProvider } from "./store/store-context";

ReactDOM.render(
  <React.StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
