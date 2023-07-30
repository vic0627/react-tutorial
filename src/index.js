import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "normalize.css";
import "./assets/css/index.scss";
import "./assets/css/prism.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

reportWebVitals();
