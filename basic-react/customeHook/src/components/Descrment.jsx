// import { useState } from "react";
// import { useEffect } from "react";
import useCounter from "../utils/use-Counter";

const Descrment = () => {
  //   const [counter, setCounter] = useState(0);
  //   useEffect(() => {
  //     setInterval(() => {
  //       setCounter((counter) => counter - 1);
  //     }, 1000);
  //   }, []);
  let counter = useCounter();
  return <div className="main">{counter}</div>;
};

export default Descrment;
