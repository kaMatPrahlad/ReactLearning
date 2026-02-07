import React, { Children, useContext } from "react";
import { userContext } from "./Parent";
import { ThemeContext } from "./Theme";

const ChildC = ({}) => {
  // const user = useContext(userContext);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {/* {/* {/* <div className="childC">
        Hello from ChildC
        {/* <h1>{user.name}</h1> */}
      {/* </div>  */}

      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Click me
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ChildC;
