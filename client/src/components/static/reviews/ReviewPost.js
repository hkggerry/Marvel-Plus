import React, { useState } from "react";

function ReviewPost({ movie }) {
  const [comment, setComment] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    fetch(`/movies/${movie.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: comment,
        member_id: 1,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setComment("");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Movie reviews:</label>
          <input
            type="text"
            name="comment"
            required="required"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ReviewPost;
