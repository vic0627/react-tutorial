import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";

// import Weather from "./components/weather/Weather";
// import Counter from "./components/counter/Counter";
// import Test from "./tutorial/Test";
// import HooksUseCallback from "./components/hooksUseCallback/HooksUseCallback";
import HooksUseMemo from "./components/hooksUseMemo/HooksUseMemo";

const root = ReactDOM.createRoot($$("#root"));
root.render(
  <>
    <HooksUseMemo />
  </>
);

reportWebVitals();
