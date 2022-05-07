import axios from "axios";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import "./AddReview.css";

const AddReview = () => {
  const [rating, setRating] = useState(1);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  const handleSubmitReview = async (event) => {
    event.preventDefault();
    const review = {
      comment: event.target.review.value,
      rating: rating,
    };

    const { data } = await axios.post("http://localhost:5000/review", review);
    console.log(data.acknowledged);
    if (data.acknowledged === true) {
      await Swal.fire({
        title: "Success!",
        text: "Your suggestion has been received!",
        icon: "success",
        confirmButtonText: "Proceed",
      });
    }

    event.target.reset();
    setRating(0);
    // console.log(review);
  };
  return (
    <div className="rating-container">
      <h4>Review / Suggestion</h4>
      <small>
        "Please drop any review or suggestions that might help us in improving
        our system. Thank you"
      </small>
      <form onSubmit={handleSubmitReview} className="add-rating-form">
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            name="review"
            id="review"
            placeholder="review"
            required
          />
          <label htmlFor="name">Your Comment</label>
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starHoverColor="gold"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />
        <div className="review-btn">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
