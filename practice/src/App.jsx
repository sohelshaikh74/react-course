import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };
  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} />
    </div>
  );
};

export default App;
