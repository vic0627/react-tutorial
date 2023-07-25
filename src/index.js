import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { $$ } from "./composable";

const root = ReactDOM.createRoot($$("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);

reportWebVitals();
