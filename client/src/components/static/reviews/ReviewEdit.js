import React from "react";

function ReviewEdit() {
  function EditButton() {
    console.log("PATCH");
  }
  return <button onClick={EditButton}>(?)</button>;
}

export default ReviewEdit;
