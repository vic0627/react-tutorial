import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "normalize.css";
import "./index.css";
import "prismjs/themes/prism-tomorrow.min.css"
import "prismjs"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <RouterProvider router={router} />
    </>
);

reportWebVitals();
