const Express = () => {
  const name = "sohel";
  const multiply = (a, b) => a * b;
  const simpleClass = "anything-i-want";
  return (
    <div>
      <p>{name}</p>
      <p>My Friend List:{["Alex", "Jhon", "Mark", "Steve"]}</p>
      <p>2*2={multiply(2, 2)}</p>
      <p className={simpleClass}>This is special class</p>
    </div>
  );
};

export default Express;
