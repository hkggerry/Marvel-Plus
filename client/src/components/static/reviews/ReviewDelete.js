import React from "react";

function ReviewDelete({ review, onDeleteReview }) {
  function handleDelete(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
      // .then((r) => r.json())
      .then(() => {
        onDeleteReview(review);
      });
  }

  return <button onClick={handleDelete}>(x)</button>;
}

export default ReviewDelete;
