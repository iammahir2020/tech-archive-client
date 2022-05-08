import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import "./AddReview.css";

const AddReview = ({ loadReviews }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  const handleSubmitReview = async (event) => {
    event.preventDefault();
    if (!user) {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login First!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed To Login Page",
      }).then(async (result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const review = {
        name: user?.displayName,
        email: user?.email,
        comment: event.target.review.value,
        rating: rating,
      };

      const { data } = await axios.post(
        "https://shielded-falls-85173.herokuapp.com/review",
        review
      );
      // console.log(data.insertedId);
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
      await loadReviews();
      await loadReviews();
      // console.log(review);
    }
  };
  return (
    <div className="rating-container">
      {/* <h4>Review / Suggestion</h4> */}
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
          starRatedColor="goldenrod"
          starHoverColor="goldenrod"
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
