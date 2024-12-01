/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// TodoList.jsx
import React from "react";

const TodoList = ({ task, deleteTask, toggleCompletion, editTask }) => {
  return (
    <div>
      <ul>
        <li
          style={{
            textDecoration: task.completed ? "line-through" : "none", // Apply line-through if completed
            cursor: "pointer",
          }}
          onClick={() => toggleCompletion(task.id)} // Toggle completion on click
        >
          {task.name}
        </li>
        <button onClick={() => editTask(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </ul>
    </div>
  );
};

export default TodoList;
