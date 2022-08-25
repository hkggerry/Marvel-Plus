import React from "react";

function ReviewDelete({ comment, review, onDeleteReview }) {
  // console.log(comment);
  function handleDelete() {
    // e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteReview(comment);
      });
  }

  return (
    <div>
      <button onClick={handleDelete}>(x)</button>
    </div>
  );
}

export default ReviewDelete;
