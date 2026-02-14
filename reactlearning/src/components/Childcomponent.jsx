import React from "react";

const Childcomponent = React.memo((props) => {
  console.log("Child component rendered again");

  return (
    <div>
      <h1>This is Child Component</h1>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

// // if i wrap my component with React.memo -> component re-render tabhi hoga
// //  jab props chnage hoga nhi to nahi hoga re-render.active-link

// //if u are sending a function, then react.memo won't
// // be able to save you from re-rendering.

export default Childcomponent;
