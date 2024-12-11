import { useState } from "react";

const Child = ({ gettingData }) => {
  const data = "john";
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    gettingData(counter);
  };
  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
    gettingData(counter);
  };
  return (
    <div>
      {/* <button onClick={dataPassing}>Passing Data</button> */}
      <button onClick={handleIncrement}>+</button>
      {counter}
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Child;
