import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiplyByAmount,
  reset,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const [amount, setAmount] = React.useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handlereset() {
    dispatch(reset());
  }
  function handleMultiply() {
    dispatch(multiplyByAmount(2));
  }
  function handleIncreAmt() {
    dispatch(incrementByAmount(amount));
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
      <span>count : {count}</span>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handlereset}>Reset</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncreAmt}>Inr by Amt</button>
    </div>
  );
}
