import React, { useState, useEffect } from "react";
import ReviewDelete from "./ReviewDelete";

function MovieReviews({ review }) {
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((comments) => setComments(comments));
  }, []);

  // Array of all reviews:
  console.log(review);

  // To store "state":
  console.log(comments);
  // The question is, do I need this state "comments" at all to delete the array?
  // Can delete but need to refresh page, either handleDeleteReview function is wrong or handleDelete function.

  function handleDeleteReview(deletedReview) {
    const updatedReviews = comments.filter(
      (comment) => comment.id !== deletedReview.id
    );
    setComments(updatedReviews);
  }

  return (
    <div>
      <li>
        {review.comments}
        <ReviewDelete
          review={review}
          onDeleteReview={handleDeleteReview}
          comment={comments}
        />
      </li>
    </div>
  );
}

export default MovieReviews;
