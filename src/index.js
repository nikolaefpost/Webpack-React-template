import React from "react";
import { RouterProvider } from "react-router-dom"
import * as ReactDOM from "react-dom/client";

import "./index.html";
import "./index.scss";
import {router} from "./App";




ReactDOM.createRoot(document.getElementById("App")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);