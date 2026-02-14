import React, { useState } from "react";
import Childcomponent from "./Childcomponent";

const Callback = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseCallback Hook in React</h1>
      {/* <p>UseCallback is a React Hook that returns a memoized version of the callback
         function that only changes if one of the dependencies has changed. It is useful 
         for optimizing performance by preventing unnecessary re-renders of child components 
         that rely on the callback function.</p> */}

      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <br />
      <p>count: {count}</p>
      <br />
      <br />
      <Childcomponent buttonName="Click me" />
    </div>
  );
};

export default Callback;
