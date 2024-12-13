import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // Store current input
  const [result, setResult] = useState(""); // Store the result

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value); // Append clicked value to input
  };

  const handleClear = () => {
    setInput(""); // Clear the input
    setResult(""); // Clear the result
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression in the input string and store the result
      setResult(eval(input)); // Using eval (ensure the input is safe in a real app)
      setInput(""); // Clear the input after calculation
    } catch (error) {
      setResult("Error"); // Handle errors in calculation
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} readOnly />
        <p>Result: {result}</p>
      </div>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
