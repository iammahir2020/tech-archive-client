import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleReview from "../SingleReview/SingleReview";
import AddReview from "../AddReview/AddReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await axios.get(
        "https://shielded-falls-85173.herokuapp.com/review"
      );
      setReviews(data);
    };
    getReviews();
    // setNewItem();
  }, []);

  const setNewItem = async () => {
    const { data } = await axios.get(
      "https://shielded-falls-85173.herokuapp.com/review"
    );
    setReviews(data);
  };
  return (
    <div>
      {reviews.length === 0 ? (
        <h2 className="no-item-message">No Reviews to Show</h2>
      ) : (
        <OwlCarousel className="owl-theme" items={2} nav>
          {reviews.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </OwlCarousel>
      )}
      <hr />
      <div className="container mb-5">
        <AddReview setNewItem={setNewItem}></AddReview>
      </div>
    </div>
  );
};

export default Reviews;
