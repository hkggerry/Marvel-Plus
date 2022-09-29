import React, { useState, useEffect, Fragment, useContext } from "react";
import ReviewReadOnly from "./ReviewReadOnly";
import ReviewEdit from "./ReviewEdit";
import { MemberContext } from "../../context/member";

function MovieReviews({ movie, toggle, setToggle }) {
  const [comments, setComments] = useState({});
  const [editReviewId, setEditReviewId] = useState(null);
  const [editFormReview, setEditFormReview] = useState("");
  const { member } = useContext(MemberContext);

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
    setComments(updatedReviews);
    setToggle(!toggle);
  }

  function handleEditClick(e, review) {
    e.preventDefault();
    console.log(review);
    setEditReviewId(review.id);

    const formValues = {
      id: review.id,
      comments: review.comments,
      member_id: member.id,
      movie_id: review.movie_id,
    };
    setEditFormReview(formValues);
  }

  function handleEditFormChange(e) {
    e.preventDefault();
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
        setEditFormReview(updatedReview);
        setEditReviewId(null);
        setToggle(!toggle);
      });
  }

  return (
    <div>
      <form>
        <br />
        {movie.reviews.map((review) => (
          <Fragment key={review.id}>
            {editReviewId === review.id ? (
              <ReviewEdit
                editFormReview={editFormReview}
                setEditFormReview={setEditFormReview}
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
