import React from "react";

const State_Lifting = (props) => {
  // What is State Lifting in React?
  //  State lifting means moving state from a child
  //   component to its parent component so that multiple
  //    child components can share and sync the same data.

  // 👉 In React, data flows one way (parent → child).
  // So if two children need the same state, the state must
  //  live in their closest common parent.

  return (
    <div>
      <h1>State Lifting in React</h1>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>
        Name state is inside card:{props.title} {props.name}
      </p>
    </div>
  );
};

export default State_Lifting;
