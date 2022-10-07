import React, { useContext } from "react";
import ReviewDelete from "./ReviewDelete";
import { MemberContext } from "../../context/member";

function ReviewReadOnly({ review, handleEditClick, onDeleteReview }) {
  const { member } = useContext(MemberContext);

  return (
    <div>
      <li>
        {review.comments}
        {review.member_id === member.id ? (
          <>
            <button type="button" onClick={(e) => handleEditClick(e, review)}>
              Edit
            </button>
            <ReviewDelete review={review} onDeleteReview={onDeleteReview} />
          </>
        ) : null}
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;{review.add_member}
        </div>
        <br />
      </li>
    </div>
  );
}

export default ReviewReadOnly;
