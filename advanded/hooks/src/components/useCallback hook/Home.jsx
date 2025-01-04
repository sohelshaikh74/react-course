import { useCallback, useState } from "react";
import Headder from "./Headder";

const Home = () => {
  const [counter, setCounter] = useState(0);
  // const newFun = () => {};
  console.log(counter);

  const newFun = useCallback(() => {}, []);
  return (
    <div>
      <Headder newFun={newFun} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click Here</button>
    </div>
  );
};

export default Home;
