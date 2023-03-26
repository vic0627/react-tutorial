import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";

import CounterGroup from "./components/counter/CounterGroup"

const root = ReactDOM.createRoot($$("#root"));
root.render(
  <div>
    <CounterGroup />
  </div>
);

reportWebVitals();
