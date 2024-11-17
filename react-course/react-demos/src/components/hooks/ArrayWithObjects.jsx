import { useState } from "react";

// Some time we have objects inside an array
const ArrayWithObjects = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spider Man",
      rating: 3,
    },
    {
      id: 2,
      title: "Super Man",
      rating: 4,
    },
    {
      id: 3,
      title: "Bat Man",
      rating: 2,
    },
  ]);
  const handleClicke = () => {
    setMovies(
      movies.map((m) => {
        return m.id === 1 ? { ...movies, title: "Jhon smith" } : m;
      })
    );
  };
  return (
    <div>
      {movies.map((m) => {
        return (
          <div key={Math.random()}>
            <li>{m.title}</li>
            <p>{m.rating}</p>
          </div>
        );
      })}
      <button onClick={handleClicke}>Change Name</button>
    </div>
  );
};

export default ArrayWithObjects;
