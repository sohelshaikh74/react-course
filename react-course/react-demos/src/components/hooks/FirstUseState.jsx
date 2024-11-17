import { useState } from "react";

const FirstUseState = () => {
  // for useState hook we need to use [] array desturtring (destructuring inital value and funtion)
  //   const counter = useState(0);
  //   console.log(counter);

  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

export default FirstUseState;
