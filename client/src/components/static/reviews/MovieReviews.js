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
        <ReviewDelete review={review} onDeleteReview={handleDeleteReview} />
        <ReviewEdit />
      </li>
    </div>
  );
}

export default MovieReviews;
