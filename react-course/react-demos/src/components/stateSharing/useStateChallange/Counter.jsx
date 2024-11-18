import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Inrement </button>
      <button onClick={handleDecrement} disabled={counter === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
