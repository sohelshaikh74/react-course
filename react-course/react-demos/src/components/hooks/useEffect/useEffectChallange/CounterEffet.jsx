import { useEffect, useState } from "react";

const CounterEffet = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      document.title = `Icrement`;
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inrement</button>
    </div>
  );
};

export default CounterEffet;
