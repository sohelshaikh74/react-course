// Question : How we can updating array of content
import { useState } from "react";
const UseStateWithArray = () => {
  const [friends, setFrineds] = useState(["jhon", "mark"]);
  const addOneFriend = () => {
    setFrineds([...friends, "steve"]);
  };

  //   Question:- How we can remove the specific person
  const removeFriend = () => {
    setFrineds(friends.filter((f) => f !== "jhon"));
  };

  //   Question  : how we can updated specific friendf
  const updateFriend = () => {
    setFrineds(
      friends.map((f) => {
        return f === "jhon" ? "jhon smith" : f;
      })
    );
  };
  return (
    <div>
      {/* {friends.map((friend) => (
        <h1 key={Math.random()}>{friend}</h1>
      ))} */}
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addOneFriend}>Add New Friend</button>
      &nbsp;
      <button onClick={removeFriend}>Remove one Friend</button>
      &nbsp;
      <button onClick={updateFriend}>Update one Friend</button>
    </div>
  );
};
export default UseStateWithArray;
