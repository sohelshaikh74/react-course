import React, { useState } from "react";

function TodoItem({ todo, removeTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing && newTask !== todo.task) {
      // Save the updated task when exiting edit mode
      editTodo(todo.id, newTask);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={newTask} onChange={handleChange} />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.task}
        </span>
      )}

      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
