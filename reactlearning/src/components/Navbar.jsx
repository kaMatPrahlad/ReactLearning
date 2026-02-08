import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
