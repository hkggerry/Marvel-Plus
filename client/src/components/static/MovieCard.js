import React from "react";
import MovieReviews from "./reviews/MovieReviews";
import ReviewPost from "./reviews/ReviewPost";

function MovieCard({ movie }) {
  function clickAlert() {
    alert("Thanks for watching");
  }

  const movieReviews = movie.reviews.map((review) => (
    <MovieReviews key={review.id} review={review} />
  ));

  return (
    <div>
      <h3>
        {movie.name} ({movie.release_date})
      </h3>
      <img src={movie.image_url} alt={movie.name} height="300px" />
      <h4>
        Ratings: {movie.rating}{" "}
        <button onClick={clickAlert}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9654;
          Play&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </h4>
      <p>{movie.short_description}&nbsp;&nbsp;</p>
      <ReviewPost movie={movie} />
      {movieReviews}
      <br />
    </div>
  );
}

export default MovieCard;
