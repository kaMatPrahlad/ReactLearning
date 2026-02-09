import Props from "./components/Props";
import UserCard from "./components/UserCard";
import nature from "./asset/images/nature.png.avif";
import nature2 from "./asset/images/nature-heart.webp";
// import UseState from "./components/useState";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";
import State_Lifting from "./components/State_Lifting";
import Logout from "./components/Logout";
import LoginBtn from "./components/LoginBtn";
import Handling from "./components/Handling";
import Hooks from "./components/Hooks";
import Parent from "./components/Parent";
import Theme from "./components/Theme";
import ReactRouting from "./components/ReactRouting";
import ReactForm from "./components/ReactForm";
import { Counter } from "./features/counter/counter";
// import "App.css"

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      {/*1. What is Components}
      {/* A component is a reusable piece of UI—think “a small, focused function that returns JSX.” */}
      {/* <UserCard className="container" /> */}
      {/* <UserCard /> */}
      {/* <UserCard /> */}
      {/* // 2- Props */}
      {/* Props are the inputs you pass into a component, like arguments to a function, so you can configure how it renders. */}
      {/* //3. UseState Hook   */}
      {/* <UseState />
       */}
      {/* 4. Passing Props as Children */}
      {/* <div className="card"> */}
      {/* <Card>
          <h1>Passing Props as Children</h1>
          <p>Learning React From Love Babbar</p>
        </Card> */}
      {/* This will override the children inside Card component  */}
      {/* <Card children="Im a children prop">
          Hello Everyone, This is Prahlad Kamat.
        </Card> */}
      {/* <Button handleClick={handleClick}>
          <p>You Clicked {count} times</p>
        </Button>
      </div>*/}
      {/* <!-- 5. State Lifting in React --> */}
      {/* Create state 
       manage state  
       change state  
       Will sync state in every child component  */}
      {/* <State_Lifting title="Card1" name={name} setName={setName} />
      <State_Lifting title="Card2" name={name} setName={setName} /> */}
      {/* <p>Im inside Parent componet:{name}</p> */}
      {/* 6. Conditional Rendering */}
      {/* <div>{isLogin ? <Logout /> : <LoginBtn />}</div> */}
      {/* 7. Event Handling in React */}
      {/* <Handling /> */}
      {/* 8. useEffect HOOK in depth */}
      {/* <Hooks /> */}
      {/* 9. UseContext Hook  */}
      {/* <Parent /> */}
      {/* // Second example of useContext Hook we are creating
       a theme context to change the theme of our app */}
      {/* <Theme /> */}
      {/* 10.All about Routing in React 2024 */}
      {/* <ReactRouting /> */}
      {/* 11. React Hook Form */}
      {/* <ReactForm /> */}

      {/* // 12. React Redux Toolkit */}
      <Counter />
    </>
  );
}

export default App;
