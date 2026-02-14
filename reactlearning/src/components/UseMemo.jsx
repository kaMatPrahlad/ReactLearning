import React, { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
  //     🔹 What is useMemo?

  // useMemo is a React Hook that memoizes (caches) a calculated value so it doesn’t recalculate on every render.

  // 👉 In simple words:

  // It remembers the result of a heavy calculation and only recalculates when dependencies change.
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // Simulating a heavy task
  function expensiveTask(num) {
    console.log("Calculating...");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let result = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <span>{count}</span>
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter the Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
      <span>Double: {result}</span>
    </div>
  );
};

export default UseMemo;
