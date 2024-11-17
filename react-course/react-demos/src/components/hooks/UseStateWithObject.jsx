import { useState } from "react";

const UseStateWithObject = () => {
  const [movies, setMovie] = useState({
    title: "Captain America",
    rating: 2,
  });
  const handleClick = () => {
    // inside this function we are updating only rating
    // first of all we copy of state (movies)
    // const copyMovie = {
    //   ...movies, //copy of current
    //   rating: 5, //what you want to update
    // };

    // now this function allow us to change this state
    // setMovie(copyMovie);
    // this is old version

    // ** now this is new version
    setMovie({ ...movies, raging: "5" });
  };
  return (
    <>
      <h1>Move Title{movies.title}</h1>
      <p>Rating:{movies.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
    </>
  );
};

export default UseStateWithObject;
