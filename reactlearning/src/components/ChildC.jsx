import React, { useContext } from "react";
import { userContext } from "./Parent";

const ChildC = () => {
  const user = useContext(userContext);
  return (
    <div>
      ChildC
      <h1>{user.name}</h1>
    </div>
  );
};

export default ChildC;
