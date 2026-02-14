import React from "react";

const Childcomponent = (props) => {
  console.log("Child component rendered");
  return (
    <div>
      <h1>This is Child Component</h1>
      <button>{props.buttonName}</button>
    </div>
  );
};

export default Childcomponent;
