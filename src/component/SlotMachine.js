import React from "react";
import "./SlotMachine.css";

export const SlotM = (props) => {
  if (props.x === props.y && props.y === props.z) {
    return (
      <h2>
        {props.x}={props.y}={props.z}=this is match
      </h2>
    );
  } else {
    return (
      <h2>
        {props.x}={props.y}={props.z}=this is not match
      </h2>
    );
  }
};

const SlotMachine = () => {
  return (
    <div className="slotmachine">
      <div className="slot">
        <h2>🎰 Welcome to SlotMachine 🎰</h2>
        <div className="match-card">
          <SlotM x="😄" y="😄" z="😄" />
          <SlotM x="😄" y="🏯" z="😄" />
          <SlotM x="😄" y="😄" z="😄" />
        </div>
      </div>
    </div>
  );
};

export default SlotMachine;
