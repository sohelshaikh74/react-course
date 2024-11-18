// eslint-disable-next-line react/prop-types
const ComponentTwo = ({ count, onClickHandler }) => {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
};

export default ComponentTwo;
