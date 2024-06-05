import { React, useState } from "react";

const LearnReact = () => {
  // const [minus, setMinus] = useState(0);
  // const [count, setCount] = useState(0);
  // const inCrem = () => {
  //   setCount(count + 1);
  // };
  // const Decrem = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // const green = "#00FF00";
  // const red = "#FF0000";
  // const [dark, setDark] = useState("red");
  // const changeDark = () => {
  //   setDark("green");
  // };
  // const [state, setSate] = useState(1);
  // const A = () => {
  //   setSate(2);
  //   console.log(state);
  // };
  const [text, setText] = useState("Hello");
  const textprint = () => {
    setText({ text } + "Rahul");
  };
  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <button onClick={inCrem}>Increment</button>
        <button onClick={Decrem}>Decrement</button>
      </div> */}
      {/* <div style={{ backgroundColor: dark, textAlign: "center" }}>
        <h1>{state}</h1>

        <button onClick={changeDark}>Clicked to change color</button>
        <button onClick={A}>click</button>
      </div> */}
      <h1>{text}</h1>
      <button onClick={textprint}>Clicked </button>
    </>
  );
};

export default LearnReact;
