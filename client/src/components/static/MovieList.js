import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, [toggle]);

  const movieData = movies.map((eachMovie) => {
    return (
      <MovieCard
        key={eachMovie.id}
        movie={eachMovie}
        toggle={toggle}
        setToggle={setToggle}
      />
    );
  });

  return <div>{movieData}</div>;
}

export default MovieList;
