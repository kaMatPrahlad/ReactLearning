import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Number is :{count}</p>
    </div>
  );
}
<b></b>;

export default UseState;
