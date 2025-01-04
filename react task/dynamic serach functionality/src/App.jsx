import { useEffect, useState } from "react";
import "./index.css"; // Importing the CSS file

const App = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserDatas(data));
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>User Data Table</h1>
      <form onSubmit={handlerSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter user name/email"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <table className="user-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userDatas
            .filter(
              (userData) =>
                userData.username.toLowerCase().includes(search) ||
                userData.email.toLowerCase().includes(search)
            )
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
