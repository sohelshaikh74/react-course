import { useState } from "react";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const handleCalculator = () => {
    setResult(eval(input));
    setInput("");
  };
  const handleClear = () => {
    setResult("");
  };
  return (
    <div>
      <input type="text" value={input} readOnly />
      <p>Result:{result}</p>
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button onClick={handleCalculator}>=</button>
        <button>/</button>
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
