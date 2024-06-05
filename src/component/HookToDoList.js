import React, { useState } from "react";
import "./Hooks.css";
const HookToDoList = () => {
  const mydata = [
    {
      name: "Rahul",
      Age: 24,
      Company: "agrex",
    },
    {
      name: "Rohit",
      Age: 24,
      Company: "agrex",
    },
  ];
  const [list, setList] = useState(mydata);

  const removetext = () => {
    return setList([]);
  };
  //   const removetext2 = () => {
  //     return setList([]);
  //   };
  return (
    <div>
      <h1>Todo List</h1>

      {mydata.map((curEle) => (
        <h1>
          Name:{curEle.name} age:{curEle.Age} Company:{curEle.Company}
        </h1>
      ))}

      <p className="textlist">
        name:{list.name} age:{list.Age} Company:{list.Company}
        <button onClick={removetext}>remove</button>
      </p>
      {/* <p className="textlist">
        name:{list.name} age:{list.Age} Company:{list.Company}
        <button onClick={removetext2}>remove</button>
      </p> */}
    </div>
  );
};

export default HookToDoList;
