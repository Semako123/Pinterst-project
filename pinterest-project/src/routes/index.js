import React from "react";
import authRoute from "./auth.routes.js";
import homeRoute from "./home.routes.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([...authRoute, ...homeRoute]);

const PinRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default PinRouterProvider;
