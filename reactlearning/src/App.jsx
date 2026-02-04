import Props from "./components/Props";
import UserCard from "./components/UserCard";
import nature from "./asset/images/nature.png.avif";
import nature2 from "./asset/images/nature-heart.webp";
import UseState from "./components/useState";

function App() {
  return (
    <>
      {/*1. What is Components / Props in React */}
      {/* A component is a reusable piece of UI—think “a small, focused function that returns JSX.” */}
      {/* Props are the inputs you pass into a component, like arguments to a function, so you can configure how it renders. */}
      {/* <UserCard className="container" /> */}
      {/* <UserCard /> */}
      {/* <UserCard /> */}

      {/* // 2- Props */}

      {/* //3. UseState Hook   */}
      <UseState />
    </>
  );
}

export default App;
