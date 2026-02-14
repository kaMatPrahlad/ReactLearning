// What is useContext?

// useContext is a React Hook used to share data globally across components 
// without passing props manually at every level.

// 👉 In simple words:

// useContext helps you avoid “prop drilling”.

import React, { use, useState } from "react";
import ChildA from "./ChildA";

//✅ In tutorial, Babbar bhaiya has explained useContext in App.jsx
// but I have created a separate component [Parent.jsx] for it,
//  so that it will be more clear to understand.

//✅ Step 1: Create a context
const userContext = React.createContext();

// Step for using useContext:-
// Step 1: Create a context
// Step 2: Wrap all the child components inside a provider
// Step 3: Provide a value to the provider
// Step 4: Consume the context value in child
//  component using useContext hook [Consumar k under jake consume karo ]

const Parent = () => {
  const [user, setUser] = useState({ name: "Prahlad" });
  return (
    <>
      <userContext.Provider value={user}>
        <h1>UseContext Hook</h1>
        <ChildA />
      </userContext.Provider>
    </>
  );
};

export default Parent;
export { userContext };
