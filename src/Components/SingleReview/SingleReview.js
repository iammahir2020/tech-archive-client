import React from "react";
import StarRating from "../StarRating/StarRating";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { name, comment, rating } = review;
  return (
    <div className="item">
      <div className="item-review">
        <p>"{comment}"</p>
        <StarRating rating={rating}></StarRating>
      </div>
      <div className="item-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SingleReview;
