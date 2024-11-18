import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  //   state variable(inputValue)
  // updater function (setInputValue)
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue} //value={inputValue} binds the value of the input field to the inputValue state. This is known as controlled input.
          onChange={handleClick}
          placeholder="Add A new Todo"
        />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todo.map((t) => {
          return <li key={Math.random()}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
