import React, { useState, useEffect } from "react";
import ReviewDelete from "./ReviewDelete";

function MovieReviews({ review }) {
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((comments) => setComments(comments));
  }, []);

  function handleDeleteReview(deletedReview) {
    const updatedReviews = comments.filter(
      (comment) => comment.id !== deletedReview.id
    );
    setComments(updatedReviews);
  }
  console.log(comments);
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
