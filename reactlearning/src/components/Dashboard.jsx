import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleClick}>Click Me</button>
      <Outlet />
    </div>
  );
};
export default Dashboard;
