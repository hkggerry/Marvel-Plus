import React, { useState } from "react";

function MovieReviews() {
  const [comment, setComment] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    // fetch("http://localhost:3000/reviews", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     comments: comment,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("submitted"));
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
    </div>
  );
}

export default MovieReviews;
