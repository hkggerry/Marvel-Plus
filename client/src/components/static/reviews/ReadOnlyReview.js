import React from "react";

function ReadOnlyReview({ review, handleEditClick }) {
  return (
    <div>
      {review.comments}
      <button type="button" onClick={(e) => handleEditClick(e, review)}>
        Edit
      </button>
    </div>
  );
}

export default ReadOnlyReview;
