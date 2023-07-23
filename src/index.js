import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";
import { GlobalTest } from "./components/global/GlobalContext";
// import App from "./tutorial/App";
// import Weather from "./components/weather/Weather";
// import Counter from "./components/counter/Counter";
// import Test from "./tutorial/Test";
// import HooksUseState from "./components/hooksUseState/HooksUseState";
// import HooksUseCallback from "./components/hooksUseCallback/HooksUseCallback";
// import HooksUseMemo from "./components/hooksUseMemo/HooksUseMemo";
// import HooksUseReducer from "./components/hooksUseReducer/HooksUseReducer";
// import HooksUseContext from "./components/hooksUseContext/HooksUseContext";
// import HooksUseRef from "./components/hooksUseRef/HooksUseRef";
// import HooksUseId from "./components/hooksUseId/HooksUseId";
// import HooksUseTransition from "./components/hooksUseTransition/HooksUseTransition";
import HooksUseLayoutEffect from "./components/hooksUseLayoutEffect/HooksUseLayoutEffect";
// import TestApi from "./components/testApi/TestApi";

const root = ReactDOM.createRoot($$("#root"));
root.render(
    <>
        <HooksUseLayoutEffect />
        <GlobalTest />
    </>
);

reportWebVitals();
