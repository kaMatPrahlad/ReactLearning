import React, { useEffect, useState } from "react";

// useEffect is a React Hook used to perform side effects in a component.

// 👉 A side effect is anything that happens outside the normal UI rendering, like:

// Fetching data from an API

// Updating the document title

// Using timers (setTimeout, setInterval)

// Subscribing/unsubscribing to events

// Accessing browser APIs (localStorage, window)

// 🧠 Simple Definition (Interview-friendly)

// useEffect lets you run code after the component renders and when certain data changes.
const Hooks = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // 1.
  //   useEffect(() => {
  //     alert("I will run on each render");
  //   });

  // 2
  //   useEffect(() => {
  //     alert("I will run on first render");
  //   }, []);

  //3 Multiple Dependencies
  //   useEffect(() => {
  //     alert("I will run when count or total changes");
  //   }, [count, total]);

  //4. Cleanup Function
  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   alert("I will run when count changes");
  //   return () => {
  //     //   clearTimeout(timer);
  //     alert("I will run before the next effect or when component unmounts");
  //   };
  // }, [count]);

  // 5. What is setInterval in React?
  // setInterval in React is used for executing repeated tasks like timers,
  // polling APIs, auto-refreshing UI, and real-time updates, and it must be
  //  cleaned up using useEffect to avoid memory leaks.

  // / Example of setInterval in React

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("SetInterval running");
      setSeconds((prev) => prev + 1);
    },1000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  function handleTotalClick() {
    setTotal(total + 1);
  }

  return (
    <div>
      <h1>All About UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <button onClick={handleClick}>Update Count</button> */}
      <br />
      <div>Count is {count}</div>
      <br />
      <button onClick={handleTotalClick}>Update Total</button>
      <br />
      <div>Total is {total}</div>
      {/* // It will run every second: */}
      <div>Time is {seconds}</div>
    </div>
  );
};

export default Hooks;
