import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./Navbar.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/navbar",
    element: (
      <div>
        <Navbar />
      </div>
    ),
  },
  {},
]);

const ReactRouting = () => {
  return (
    <div>
      <h1>All About Routing in React</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default ReactRouting;
