import React from "react";

const Props = (props) => {
  return (
    <div className="container">
      <h1>
        Hello This is {props.name}, and I stay in {props.location}
      </h1>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Props;
