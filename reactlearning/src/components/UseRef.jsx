import { current } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  //   const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  //   let btnRef = useRef();
  function startTime() {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTime() {
    // clearInterval(timeRef.current);
    // timeRef.current = null;
    const internalId = timeRef.current;
    clearInterval(internalId);
  }
  function resetTime() {
    stopTime();
    setTime(0);
  }

  //   function changeColor() {
  //     btnRef.current.style.backgroundColor = "red";
  //   }
  //   function handleClick() {
  //     val.current = val.current + 1;
  //     console.log("value of vale", val.current);
  //     setCount(count + 1);
  //   }

  //   useEffect(() => {
  //     console.log("I will run on every render.");
  //   });

  return (
    <div>
      <h1>UseRef React Hook</h1>
      {/* <p>
        useRef is a React Hook that lets you:

        Access DOM elements directly

        Store values that don’t cause re-render when changed
        useRef is a React Hook that allows you to persist values across renders
        without causing a re-render when the value changes. It provides a
        mutable ref object that can hold any value, and its .current property is
        used to access or update the value.
      </p> */}

      <div>
        {/* <button onClick={handleClick} ref={btnRef}>
          Increment
        </button>
        <br />
        <span onChange={changeColor}>Count: {count}</span>
        <br />
        <button onClick={changeColor}>Decrement</button> */}

        <div>
          <h1>Stop Watch Using UseRef</h1>
          <button onClick={startTime}>start</button>
          <br />
          <br />
          <button onClick={stopTime}>Stop</button>
          <br />
          <br />
          <button onClick={resetTime}>Reset</button>
          <br />
          <br />
          <span>StopWatch: {time}</span>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
