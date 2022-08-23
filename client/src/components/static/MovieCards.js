import React from "react";
import MovieReviews from "./reviews/MovieReviews";

function MovieCards({ movie }) {
  function clickAlert() {
    alert("Thanks for watching");
  }

  return (
    <div>
      <img src={movie.image_url} alt={movie.name} height="300px" />
      <h4>{movie.name}</h4>
      <h4>
        Ratings: {movie.rating}{" "}
        <button onClick={clickAlert}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9654;
          Play&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </h4>
      <p>Release Date: {movie.short_description}</p>

      <MovieReviews />
    </div>
  );
}

export default MovieCards;
