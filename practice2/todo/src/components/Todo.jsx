import { useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const trimedText = inputValue.trim();
  const add = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: trimedText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setInputValue("");
  };
  const deleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const toggle = (id) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  return (
    <div className="bg-white w-6/12 max-md place-self-center flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-3">
        <img src={todo_icon} alt="todo-icon" className="w-9" />
        <p className="text-3xl font-semibold">ToDo App</p>
      </div>
      {/* input feilds */}
      <div className="flex items-center my-5 bg-gray-200 rounded-full">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter your task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600"
        />
        <button
          className="border-none rounded-full outline-none bg-orange-600 w-32 h-14 text-white font-medium cursor-pointer"
          onClick={add}
        >
          Add
        </button>
      </div>
      {/* todo itsm */}
      <div className="overflow-y-auto max-h-[400px] pr-4">
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              id={item.id}
              text={item.text}
              toggle={toggle}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
