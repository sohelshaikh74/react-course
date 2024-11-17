import { useState } from "react";

const PracticeHooks = () => {
  const [movies, setMovies] = useState({
    title: "Captain America ",
    rating: 2,
  });
  const changeRatingHandler = () => {
    const rating = {
      ...movies,
      rating: "5",
    };
    setMovies(rating);
  };
  return (
    <div>
      Title{movies.title}
      <p>Rating:{movies.rating}</p>
      <button onClick={changeRatingHandler}>Update Rating</button>
    </div>
  );
};

export default PracticeHooks;
