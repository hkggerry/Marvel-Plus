import React from "react";

function ReviewDelete({ review, onDeleteReview }) {
  // console.log(comment);
  function handleDelete() {
    // e.preventDefault();
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
