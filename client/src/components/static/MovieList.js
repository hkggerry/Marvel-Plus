import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  // useEffect(() => {
  //   fetch("/reviews", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((r) => r.json())
  //     .then((reviews) => setReviews(reviews));
  // }, [reviews]);

  const movieData = movies.map((eachMovie) => {
    return (
      <MovieCard
        key={eachMovie.id}
        movie={eachMovie}
        // setReviews={setReviews}
        // reviews={reviews}
      />
    );
  });

  return <div>{movieData}</div>;
}

export default MovieList;
