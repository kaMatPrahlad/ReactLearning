import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <div>
      <p>About Page</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default About;
