import { useState } from "react";

const TodoListPractice = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleClick = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Todo Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Task"
          value={inputValue}
          onChange={handleClick}
        />
        <button type="submit">Add Task</button>
      </form>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoListPractice;
