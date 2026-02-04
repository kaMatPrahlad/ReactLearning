import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  // What is useState Hook in React?
  // 1. The useState hook is a special function that allows you to add state management to functional components in React.
  // 2. It returns an array with two elements: the current state value and a function to update that state.
  // 3. You can call the state update function to change the state, which will trigger a re-render of the component with the new state value.

  return (
    <div className="container">
      <p>You have Clicked :{count} time</p>
      <button id="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
<b></b>;

export default UseState;
