import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me</button>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Button;
