import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PortalHome from "./pages/PortalHome";
import LoginView from "./auth/LoginView";
import RegisterView from "./auth/RegisterView";

const routes = (isAuthenticated) => [
   {
      path: "/app",
      element: isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [{ path: "portal", element: <PortalHome /> }]
   },
   { path: "login", element: <LoginView /> },
   { path: "register", element: <RegisterView /> },
   { path: "*", element: <Navigate to="/app/portal" /> }
];

export default routes;
