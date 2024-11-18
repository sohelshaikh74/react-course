import { useState } from "react";

const Example = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    const generateNewRandomNumber = Math.round(Math.random() * 10000);
  });
  const generateNumberHandler = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setRandomNumber(randomNumber);
  };
  return (
    <div>
      <h1>Random Number:{randomNumber}</h1>
      <button onClick={generateNumberHandler}>Generate New Number</button>
    </div>
  );
};

export default Example;
