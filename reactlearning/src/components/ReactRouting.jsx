import React, { Children } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./Navbar.css";
import ParaCompo from "./ParaCompo";
import Courses from "./Courses";
import Reports from "./Reports";
import Test from "./Test";
import NotFound from "./NotFound";

// React routing is how you move between different pages (or views) in a React app without reloading the whole page.
// In simple words:
// 👉 Routing decides which component to show for which URL.

// Topic we learn in Routing
// 1. Routing
// 2. Dynamic Routing
// 3. NavLink / Link
// 4. Parameter using useParams/ Passing parameter in URL
// 5. useNavigate
// 6. Nested Routing

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
        {/* <Navbar /> */}
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
        {/* <Navbar /> */}
      </div>
    ),

    children: [
      {
        path: "Courses",
        element: <Courses />,
      },
      {
        path: "reports",
        element: <Reports />,
      },

      {
        path: "test",
        element: <Test />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/navbar",
    element: (
      <div>
        <Navbar />
      </div>
    ),
  },
  {
    path: "student/:id/",
    element: (
      <div>
        <Navbar />
        <ParaCompo />
      </div>
    ),
  },
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
