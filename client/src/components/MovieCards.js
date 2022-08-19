import React from "react";

function MovieCards({ movie }) {
  console.log(movie);
  return (
    <div>
      <img src={movie.image_url} alt={movie.name} height="300px" />
      <h4>{movie.name}</h4>
      <h4>Ratings: {movie.rating}</h4>
      <p>Release Date: {movie.short_description}</p>
    </div>
  );
}

export default MovieCards;
