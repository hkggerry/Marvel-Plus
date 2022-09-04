import React, { useState, useEffect } from "react";
import ReviewDelete from "./ReviewDelete";
import ReviewEdit from "./ReviewEdit";

function MovieReviews({ review }) {
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((comments) => setComments(comments));
  }, []);

  // Array of all reviews:
  // console.log(review);

  // To store "state":
  // console.log(comments);
  // The question is, do I need this state "comments" at all to delete the array?
  // Can delete but need to refresh page, either handleDeleteReview function is wrong or handleDelete function.

  function handleDeleteReview(deletedReview) {
    console.log("deletedReview", deletedReview);
    const updatedReviews = comments.filter(
      (comment) => comment.id !== deletedReview.id
    );
    console.log(comments);
    setComments(updatedReviews);
    console.log(updatedReviews);
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
        <ReviewEdit />
      </li>
    </div>
  );
}

export default MovieReviews;
