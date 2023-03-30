import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";
import { GlobalContext } from "./components/global/GlobalPopup";
// import Weather from "./components/weather/Weather";
// import Counter from "./components/counter/Counter";
// import Test from "./tutorial/Test";
// import HooksUseCallback from "./components/hooksUseCallback/HooksUseCallback";
import HooksUseMemo from "./components/hooksUseMemo/HooksUseMemo";

const root = ReactDOM.createRoot($$("#root"));
root.render(
  <>
    <GlobalContext.Provider value={GlobalContext}>
      <HooksUseMemo />
    </GlobalContext.Provider>
  </>
);

reportWebVitals();
