import { useEffect, useState } from "react";

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handleClear = () => {
    setName("");
  };
  return (
    <div>
      <h1>Your Name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      &nbsp;
      <button onClick={handleClear}>Clearn Name</button>
    </div>
  );
};

export default ExampleThree;
