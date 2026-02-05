import React from "react";

// function handleClick(e) {
//   console.log("Something is Clicked", e.target.value);
// }

function onsubmit(e) {
  e.preventDefault();
  alert("Should i submit this?");
}
function handleChange(e) {
  console.log("Value has changed in input", e.target.value);
}

// function OnMouseOver() {
//   alert("You hover your Mouse on p tag");
// }

const Handling = () => {
  {
    /* Event Handling in React is how you respond to user 
      actions—like clicks, typing, form submissions, mouse movement,
       etc.—inside a React app. */
  }
  {
    /* Think of it as:
     👉 “User does something → React runs your function.” */
  }
  return (
    <form onSubmit={onsubmit}>
      <h1>Event Handling in React</h1>
      <input type="text" placeholder="Enter Name" onChange={handleChange} />
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* <p onMouseOver={OnMouseOver} style={{ border: "1px solid black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        laudantium aliquam ratione aspernatur eligendi corrupti cumque dicta
        tempore voluptate doloribus?
      </p> */}
      <button type="submit">Click me</button>
    </form>
  );
};

export default Handling;
