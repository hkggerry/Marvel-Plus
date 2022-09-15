import React, { useState, useEffect, Fragment } from "react";
import ReviewReadOnly from "./ReviewReadOnly";
import ReviewEdit from "./ReviewEdit";

function MovieReviews({ movie }) {
  const [comments, setComments] = useState({});
  const [editReviewId, setEditReviewId] = useState(null);
  const [editFormReview, setEditFormReview] = useState({
    comments: "",
    member_id: 2,
  });

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

  function handleEditClick(e, review) {
    e.preventDefault();
    console.log(review);
    const formValues = {
      comments: review.comments,
      member_id: 2,
    };

    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    })
      .then((resp) => resp.json())
      .then((updatedReview) => {
        setEditReviewId(review.id);
        // This one below stores the review when edit
        setEditFormReview(formValues);
        console.log(updatedReview);
      });
  }

  function handleEditFormChange(e) {
    e.preventDefault();
    console.log("Saved");
    // const fieldName = e.target.getAttribute("name");
    // const fieldValue = e.target.value;

    // const newFormReview = { ...editFormReview };
    // newFormReview[fieldName] = fieldValue;

    // setEditFormReview(newFormReview);
  }
  return (
    <div>
      <form>
        <br />
        {movie.reviews.map((review) => (
          <Fragment>
            {editReviewId === review.id ? (
              <ReviewEdit
                editFormReview={editFormReview}
                handleEditFormChange={handleEditFormChange}
              />
            ) : (
              <ReviewReadOnly
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
