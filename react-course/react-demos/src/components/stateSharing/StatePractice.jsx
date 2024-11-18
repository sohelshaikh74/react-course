const StatePractice = ({ number, setCounter }) => {
  //   const handleClick = () => {
  //     setCounter(counter + 1);
  //   };
  //   const handleClickDcrement = setCounter(counter - 1);
  const handleClick = () => {
    number = Math.round(Math.random() * 1000);
    setCounter(number);
  };
  return (
    <div>
      {/* <h1>{counter}</h1>
      <button onClick={handleClick}>Increment</button> */}
      {/* <button onClick={() => handleClickDcrement}>Decrement</button> */}
      <h1>Random random Number:{number}</h1>
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
};

export default StatePractice;
