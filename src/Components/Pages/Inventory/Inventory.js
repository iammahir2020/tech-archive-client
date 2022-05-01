import axios from "axios";
import "./Inventory.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    const getItem = async () => {
      const url = `http://localhost:5000/item?id=${id}`;
      const { data } = await axios.get(url);
      setItem(data);
      setQuantity(data.quantity);
    };
    getItem();
  }, [id]);

  const handleDeliveredButton = () => {
    const newQuantity = parseInt(quantity) - 1;
    if (newQuantity < 0) {
      toast("The Item is out of stock");
      return;
    }
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  const handleUpdateQuantityButton = (event) => {
    event.preventDefault();
    const quantityInput = parseInt(event.target.number.value);
    if (quantityInput <= 0) {
      toast("Quantity can not be a negative number");
      return;
    }
    console.log(quantityInput);
    const newQuantity = parseInt(quantity) + quantityInput;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
    event.target.reset();
  };

  const updateQuantity = async (newQuantity) => {
    const url = `http://localhost:5000/item`;
    const { data } = await axios.put(url, { newQuantity, id });
    console.log(data);
  };

  return (
    <div className="container pt-4">
      <PageTitle title="Update Item"></PageTitle>
      <h2 className="header">Update Item</h2>
      <div className="item-container">
        <div className="item-detail">
          <h4>
            <span>Name:</span> {item.name}
          </h4>
          <p>
            <span>Supplier Name:</span> {item.supplierName}
          </p>
          <p>
            <span>Description:</span> {item.description}
          </p>
          <p>
            <span>Price:</span> {item.price}
            <span> /unit</span>
          </p>
          <h4>
            <span>In Stock:</span> {quantity}
            <span> unit</span>
          </h4>
          <small className="text-danger">
            {quantity === 0 && `out of stock`}
          </small>
          {/* <hr /> */}
          {/* <p>Single Item Delivered</p> */}
          <button
            disabled={quantity === 0 ? true : false}
            onClick={handleDeliveredButton}
            className="delivered-btn"
          >
            <FontAwesomeIcon className="icon" icon={faTruck} />
            <p>Delivered</p>
          </button>
          <hr />
          <div className="update-quantity">
            <h5>Update Inventory</h5>
            <br />
            <form onSubmit={handleUpdateQuantityButton}>
              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter Quantity"
                  required
                />
              </div>
              <div className="update-quantity-btn">
                <input
                  className="updateQuantity-btn"
                  type="submit"
                  value="Update Quantity"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="item-image">
          <img src={item.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
