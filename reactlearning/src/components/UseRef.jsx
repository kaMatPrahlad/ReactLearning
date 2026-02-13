import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleClick() {
    val.current = val.current + 1;
    console.log("value of vale", val.current);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("I will run on every render.");
  });

  return (
    <div>
      <h1>UseRef React Hook</h1>
      {/* <p>
        useRef is a React Hook that allows you to persist values across renders
        without causing a re-render when the value changes. It provides a
        mutable ref object that can hold any value, and its .current property is
        used to access or update the value.
      </p> */}

      <div>
        <button onClick={handleClick}>Click me</button>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default UseRef;
