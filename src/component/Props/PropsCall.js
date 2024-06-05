import React from "react";

const PropsCall = (props) => {
  return (
    <div>
      <h1>
        {props.name} {props.lastname}
        {props.compony}
      </h1>
    </div>
  );
};

export default PropsCall;
