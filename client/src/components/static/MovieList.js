import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";

function MovieList() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((movies) => setMovie(movies));
  }, []);

  const movieData = movie.map((eachMovie) => {
    return <MovieCards key={eachMovie.id} movie={eachMovie} />;
  });

  return <div>{movieData}</div>;
}

export default MovieList;
