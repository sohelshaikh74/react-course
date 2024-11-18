const TodoList = ({ id, text, delteTodo }) => {
  return (
    <div>
      <ul>
        <li onClick={() => delteTodo(id)}>{text}</li>
      </ul>
    </div>
  );
};

export default TodoList;
