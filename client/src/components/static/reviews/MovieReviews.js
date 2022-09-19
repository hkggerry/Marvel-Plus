import React, { useState, useEffect, Fragment } from "react";
import ReviewReadOnly from "./ReviewReadOnly";
import ReviewEdit from "./ReviewEdit";

function MovieReviews({ movie }) {
  const [comments, setComments] = useState({});
  const [editReviewId, setEditReviewId] = useState(null);
  const [editFormReview, setEditFormReview] = useState("");

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((comments) => {
        setComments(comments);
      });
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

  function handleEditClick(e, review) {
    e.preventDefault();
    console.log(review);
    setEditReviewId(review.id);

    const formValues = {
      id: review.id,
      comments: review.comments,
      member_id: 2,
      movie_id: review.movie_id,
    };
    setEditFormReview(formValues);
  }

  function handleEditFormChange(e) {
    e.preventDefault();
    console.log("Saved");
    console.log(editFormReview);

    fetch(`/reviews/${editFormReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: editFormReview.comments,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedReview) => {
        // This one below stores the review when edit
        // setEditFormReview(formValues);
        console.log(updatedReview);
      });
  }
  // const fieldName = e.target.getAttribute("name");
  // const fieldValue = e.target.value;

  // const newFormReview = { ...editFormReview };
  // newFormReview[fieldName] = fieldValue;

  // setEditFormReview(newFormReview);
  return (
    <div>
      <form>
        <br />
        {movie.reviews.map((review) => (
          <Fragment>
            {editReviewId === review.id ? (
              <ReviewEdit
                // key={review.id}
                editFormReview={editFormReview}
                setEditFormReview={setEditFormReview}
                handleEditFormChange={handleEditFormChange}
              />
            ) : (
              <ReviewReadOnly
                // key={review.id}
                review={review}
                handleEditClick={handleEditClick}
                onDeleteReview={handleDeleteReview}
              />
            )}
          </Fragment>
        ))}
      </form>
    </div>
  );
}

export default MovieReviews;
