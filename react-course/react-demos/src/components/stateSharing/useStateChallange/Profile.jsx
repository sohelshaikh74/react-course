import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };
  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        value={profile.name}
        onChange={handleChange}
      />
      <label>Age:</label>
      <input
        type="number"
        name="age"
        placeholder="enter age"
        value={profile.age}
        onChange={handleChange}
      />
      <h1>Profile Information</h1>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
    </div>
  );
};

export default Profile;

// const { name, value } = e.target;
// Explanation:
// This is a destructuring assignment. It's extracting the name and value properties from the e.target object, which represents the HTML element (input) that triggered the event.
// name refers to the name of the input field (either "name" or "age"), and value refers to the current value that the user entered into the input field.
