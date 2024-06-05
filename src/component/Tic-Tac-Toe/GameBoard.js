import React, { useState } from "react";
import "./TicTacToe.css";

const GameBoard = () => {
  // Generate grid items
  const [cross, setCross] = useState("X");
  const [zero, setZero] = useState("O");
  const gridItems = [];
  for (let i = 1; i <= 9; i++) {
    gridItems.push(
      <div key={i} className="grid-item">
        {i}
      </div>
    );
  }

  return (
    <div>
      <div className="Grid-container">{gridItems}</div>
    </div>
  );
};

export default GameBoard;
