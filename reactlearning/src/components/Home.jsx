import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about")
  }
  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
