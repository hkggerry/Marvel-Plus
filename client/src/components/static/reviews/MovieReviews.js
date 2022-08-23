import React, { useState } from "react";

function MovieReviews({ review }) {
  const [comment, setComment] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Movie reviews:</label>
          <input
            type="text"
            name="comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <br />
      <li>{review.comments}</li>
    </div>
  );
}

export default MovieReviews;
