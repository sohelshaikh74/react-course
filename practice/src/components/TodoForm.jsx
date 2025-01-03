import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
