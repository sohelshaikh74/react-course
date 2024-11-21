import { useContext, useState } from "react";
import { UserContext } from "../ContextApiExercise/Usercontext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          placeholder="enter new name"
        />
        <button type="submit">Update name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
