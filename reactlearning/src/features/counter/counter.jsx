import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiplyByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <button onClick={handleIncrement}>Increment</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
