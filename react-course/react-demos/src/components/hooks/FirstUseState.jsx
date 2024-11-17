import { useState } from "react";

const FirstUseState = () => {
  // for useState hook we need to use [] array desturtring (destructuring inital value and funtion)
  //   const counter = useState(0);
  //   console.log(counter);

  const [count, setCount] = useState(0);
  //   ############# very import when this function called the component is re-render our application ##################
  //   const incrementHandler = () => {
  //     setCount(count + 1);
  //   };
  //   const decrementHandler = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };

  //   ############ very import in this case the component is not re-render our application #############
  //   you cannot change the value using like this
  const incrementHandler = () => {
    count + 1;
  };
  const decrementHandler = () => {
    count - 1;
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>+</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={decrementHandler} disabled={count === 0}>
        -
      </button>
      {/*  Disable when count is 0 */}
    </div>
  );
};

export default FirstUseState;
