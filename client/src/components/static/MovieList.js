import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, [movies]);

  const movieData = movies.map((eachMovie) => {
    return <MovieCard key={eachMovie.id} movie={eachMovie} />;
  });

  return <div>{movieData}</div>;
}

export default MovieList;
