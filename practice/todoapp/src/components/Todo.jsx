import React, { useState } from "react";

const App = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to manage form input fields
  const [taskName, setTaskName] = useState("");
  const [editingTask, setEditingTask] = useState(null); // Manage task being edited

  // Add a new task (Create)
  const addTask = () => {
    if (!taskName) return; // Don't add empty tasks

    const newTask = {
      id: Date.now(), // Unique ID for each task
      name: taskName,
    };

    setTasks([...tasks, newTask]);
    setTaskName(""); // Clear input after adding the task
  };

  // Edit an existing task (Update)
  const editTask = (task) => {
    setTaskName(task.name); // Set the task name in input field for editing
    setEditingTask(task); // Set the task as being edited
  };

  // Save the edited task (Update)
  const saveTask = () => {
    if (!taskName) return; // If no task name, don't save

    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, name: taskName } : task
    );
    setTasks(updatedTasks);
    setTaskName(""); // Clear input after saving
    setEditingTask(null); // Reset editing state
  };

  // Delete a task (Delete)
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management</h1>

      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task"
        />
        {editingTask ? (
          <button onClick={saveTask}>Save Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
