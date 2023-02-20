import React from "react";
import {createBrowserRouter} from 'react-router-dom'
import Home, { loader as homeLoader } from "./pages/home";
import Children from "./pages/children";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home  />,
        errorElement: <ErrorPage />,
        loader: homeLoader,
    },
    {
        path: "child",
        element: <Children/>,
    },
]);