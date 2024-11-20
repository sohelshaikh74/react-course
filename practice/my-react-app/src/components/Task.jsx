import { useState } from "react";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const addTodo = (e) => {
    e.preventDefault();
    const trimedInputValue = inputValue.trim();
    if (trimedInputValue === "") return;
    const newTodo = {
      id: Date.now(),
      name: trimedInputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const editTodo = (todo) => {
    setInputValue(todo.name);
    setInputValue("");
    setEditingTodo(todo);
  };
  const saveTodo = () => {
    if (!inputValue) return;
    const updatedTodo = todos.map((todo) =>
      todo.id === editingTodo ? { ...todo, name: inputValue } : todo
    );
    setTodos(updatedTodo);
    setInputValue("");
    setEditingTodo(null);
  };
  const deleteTdod = (id) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodo);
  };
  return (
    <div>
      <h1>Todo Management</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="enter todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        {editTodo ? (
          <button onClick={saveTodo}>Save</button>
        ) : (
          <button onClick={addTodo}>Add Todo</button>
        )}
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <ul key={todo.id}>
              <li>{todo.name}</li>
              <button onClick={() => editTodo(todo)}>Edit</button>
              <button onClick={() => deleteTdod(todo.id)}>Delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
