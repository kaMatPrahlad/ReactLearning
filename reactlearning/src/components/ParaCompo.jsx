// Simple  Answer 🧠

// A parameter in React routing is a dynamic value in the URL
// that allows passing data to a component. It is defined
// using : in the route path and accessed using the useParams hook.
import React from "react";
import { useParams } from "react-router-dom";

const ParaCompo = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Para Component</p>
      <h1>Para ID is : {id}</h1>
    </div>
  );
};

export default ParaCompo;
