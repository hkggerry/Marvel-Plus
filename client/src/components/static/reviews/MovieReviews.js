import React, { useState, useEffect, Fragment } from "react";
import ReadOnlyReview from "./ReadOnlyReview";
// import ReviewDelete from "./ReviewDelete";
import ReviewEdit from "./ReviewEdit";
import EditOnlyReview from "./EditOnlyReview";

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
    setEditReviewId(review.id);

    const formValues = {
      comments: review.comments,
      member_id: 2,
    };

    setEditFormReview(formValues);
  }

  function handleEditFormChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormReview = { ...editFormReview };
    newFormReview[fieldName] = fieldValue;

    setEditFormReview(newFormReview);
  }
  return (
    <div>
      <li>
        {/* {review.comments} */}
        <form>
          {movie.reviews.map((review) => (
            <Fragment>
              {editReviewId === review.id ? (
                <EditOnlyReview
                  editFormReview={editFormReview}
                  handleEditFormChange={handleEditFormChange}
                />
              ) : (
                <ReadOnlyReview
                  review={review}
                  handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
          ))}
        </form>
        {/* <ReviewDelete review={review} onDeleteReview={handleDeleteReview} /> */}
        <ReviewEdit />
      </li>
    </div>
  );
}

export default MovieReviews;
