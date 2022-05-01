import axios from "axios";
import "./Inventory.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Inventory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    const getItem = async () => {
      const url = `https://shielded-falls-85173.herokuapp.com/item?id=${id}`;
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
    const url = `https://shielded-falls-85173.herokuapp.com/item`;
    const { data } = await axios.put(url, { newQuantity, id });
    if (data.acknowledged) {
      Swal.fire({
        title: "Stock Updated!",
        icon: "success",
      });
    }
  };

  return (
    <div className="container py-4">
      <PageTitle title="Update Item"></PageTitle>
      <h2 className="header">Update Quantity</h2>
      <div className="navigate-btn-container">
        <button onClick={() => navigate("/manage")} className="navigate-btn">
          Manage Inventories
        </button>
      </div>
      <div className="item-container">
        <div className="item-detail">
          <p>
            <span>Id:</span> {item._id}
          </p>
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
