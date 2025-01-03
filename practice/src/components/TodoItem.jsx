import { useState } from "react";

const TodoItem = ({ todo, editTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);
  const handleEdit = (e) => {
    if (isEditing && newTask !== todo.task) {
      editTodo(todo.id, newTask);
    }
    setNewTask(!isEditing);
  };
  const handleChange = (e) => {
    setEditing(e.target.value);
  };
  return (
    <div>
      {isEditing ? (
        <input type="text" value={newTask} onChange={handleChange} />
      ) : (
        <span style={{ textDecoration: todo }}>{todo.task}</span>
      )}
      <button>Complete</button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
