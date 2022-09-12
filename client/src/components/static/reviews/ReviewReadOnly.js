import React from "react";
import ReviewDelete from "./ReviewDelete";

function ReviewReadOnly({ review, handleEditClick, onDeleteReview }) {
  return (
    <div>
      <li>
        {review.comments}
        <button type="button" onClick={(e) => handleEditClick(e, review)}>
          Edit
        </button>
        <ReviewDelete review={review} onDeleteReview={onDeleteReview} />
      </li>
    </div>
  );
}

export default ReviewReadOnly;
