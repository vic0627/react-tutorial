import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";

import Weather from './components/weather/Weather';
import Counter from "./components/counter/Counter";
import Test from "./tutorial/Test";

const root = ReactDOM.createRoot($$("#root"));
root.render(
  <>
    <Test />
  </>
);

reportWebVitals();
