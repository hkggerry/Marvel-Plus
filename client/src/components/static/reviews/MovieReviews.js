import React from "react";
import ReviewDelete from "./ReviewDelete";

function MovieReviews({ review }) {
  function handleDelete(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    });
    //   .then((r) => r.json())
    //   .then((data) => console.log(data));
    console.log("Delete");
  }
  return (
    <div>
      <ReviewDelete review={review} />
      <li>
        {review.comments} <button onClick={handleDelete}>(x)</button>
      </li>
    </div>
  );
}

export default MovieReviews;
