import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([
    {
        path: "/",
        element: <div></div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <App />
    </React.StrictMode>,
);


reportWebVitals();