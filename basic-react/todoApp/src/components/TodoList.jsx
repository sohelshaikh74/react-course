import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, toggleComplete, editTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
