import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  // i want to display username
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not Logged in</h1>;
  return <div>Profile:{user.username}</div>;
};

export default Profile;
