import React from "react";

function EditOnlyReview({ editformReview, handleEditFormChange }) {
  return (
    <div>
      <input
        type="text"
        required="required"
        placeholder="Edit Review"
        name="comments"
        // value={editformReview.comments}
        onChange={handleEditFormChange}
      ></input>
      <button type="submit">Save</button>
    </div>
  );
}

export default EditOnlyReview;
