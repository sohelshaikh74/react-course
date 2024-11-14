import { useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [inputText, setInputText] = useState(""); // state for controlling input value

  const add = (e) => {
    e.preventDefault(); // Prevent form submission if button is inside a form

    const trimmedText = inputText.trim();

    if (trimmedText === "") {
      return; // Don't add empty todos
    }

    const newTodo = {
      id: new Date().getTime(), // Use getTime() for unique IDs
      text: trimmedText,
      isComplete: false,
    };

    console.log("Adding new todo: ", newTodo); // Log new todo being added

    setTodoList((prev) => [...prev, newTodo]);
    setInputText(""); // Reset input field after adding todo
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

  useEffect(() => {
    console.log("Todo list updated: ", todoList); // Log the updated todo list
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-6/12 max-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="todo-icon" className="w-8" />
        <h1 className="text-3xl font-semibold">ToDo List</h1>
      </div>

      {/* input fields */}
      <div className="flex items-center my-5 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add your task"
          value={inputText} // Controlled input
          onChange={(e) => setInputText(e.target.value)} // Update state when input changes
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          type="button" // Make sure the button doesn't trigger a form submit
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
          onClick={add} // Add todo on click
        >
          Add
        </button>
      </div>

      {/* todo list with scroll */}
      <div className="overflow-y-auto max-h-[400px] pr-4">
        {" "}
        {/* Added padding-right */}
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
