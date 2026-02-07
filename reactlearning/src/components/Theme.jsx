import React, { createContext, useState } from "react";
import ChildA from "./ChildA";
import "./Theme.css";

const ThemeContext = createContext();
const Theme = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <h1>Hello from Theme.jsx</h1> */}
        <div
          className="theme"
          style={{ backgroundColor: theme === "light" ? "wheat" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Theme;
export { ThemeContext };
