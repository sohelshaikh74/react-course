// import { useEffect } from "react";
// import { useState } from "react";
import useCounter from "../utils/use-Counter";

// import useCounter from "../utils/use-Counter";

const Increment = () => {
  //   const [counter, setCounter] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       setCounter((counter) => counter + 1);
  //     }, 1000);
  //   }, []);
  //now this useCounter is function and function can also return a value
  const counter = useCounter(true);
  return <div className="main">{counter}</div>;
};

export default Increment;
