import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <>
      <div className="container" style={{ height: "50vh", width: "50vw" }}>
        <h6>Calculator</h6>
        <div className="row border " style={{ height: "15vh" }}>
          <div className="col-12 d-flex align-items-center justify-content-end">
            {input}
          </div>
        </div>
        <div
          className="row border "
          style={{ height: "10vh", textAlign: "center" }}
        >
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleClear("C")}
          >
            C
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("+")}
          >
            +
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("-")}
          >
            -
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("*")}
          >
            {" "}
            x
          </div>
        </div>
        <div className="row border" style={{ height: "10vh" }}>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("7")}
          >
            7
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("8")}
          >
            8
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("9")}
          >
            9
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </div>
        </div>
        <div className="row border" style={{ height: "10vh" }}>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("4")}
          >
            4
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("5")}
          >
            5
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("6")}
          >
            6
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("=")}
          >
            =
          </div>
        </div>
        <div className="row border" style={{ height: "10vh" }}>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("1")}
          >
            1
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("2")}
          >
            2
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("3")}
          >
            3
          </div>
          <div
            className="col-3 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick(".")}
          >
            {" "}
            .
          </div>
        </div>
        <div className="row border" style={{ height: "10vh" }}>
          <div
            className="col-6 border d-flex align-items-center justify-content-center"
            onClick={() => handleButtonClick("0")}
          >
            0
          </div>
          <div
            className="col-6 border d-flex align-items-center justify-content-center"
            onClick={handleCalculate}
          >
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
