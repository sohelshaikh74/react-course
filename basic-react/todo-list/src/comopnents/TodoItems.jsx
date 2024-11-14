import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        {/* Conditional image rendering for tick or not-tick */}
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through text-gray-400" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)} // Now this will trigger `handleDelete` when clicked
        src={delete_icon}
        alt="delete icon"
        className="w-5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
