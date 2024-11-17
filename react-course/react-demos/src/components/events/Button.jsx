const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random() * 10));
  };
  return (
    <div>
      {/* we are not used () here becuase if we use () it will call immdiately when copmonent is load but we don't want that we want when i click on button then it will call */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Button;
