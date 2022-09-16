import React from "react";

function ReviewEdit({ editFormReview, handleEditFormChange }) {
  return (
    <div>
      <input
        type="text"
        required="required"
        placeholder="Edit Review"
        name="comments"
        value={editFormReview.comments}
        onChange={handleEditFormChange}
      ></input>
      <button type="submit">Save</button>
    </div>
  );
}

export default ReviewEdit;
