/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
const TodoList = ({ todos, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} editTodo={editTodo} />
      ))}
    </div>
  );
};

export default TodoList;
