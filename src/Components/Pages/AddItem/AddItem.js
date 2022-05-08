import addItemImage from "../../../images/addItem.jpg";
import React, { useState } from "react";
import "./AddItem.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddItem = () => {
  const [priceMessage, setPriceMessage] = useState("");
  const [quantityMessage, setQuantityMessage] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleAddItem = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;
    const creater = user?.email;

    if (price <= 0) {
      setPriceMessage("Price Can Not be less then 0");
      setQuantityMessage("");
      return;
    }
    if (quantity <= 0) {
      setQuantityMessage("Quantity Can Not be less then 0");
      setPriceMessage("");
      return;
    }

    const item = {
      creater,
      name,
      supplierName,
      description,
      price,
      quantity,
      image,
    };
    // console.log(item);
    const { data } = await axios.post(
      "https://shielded-falls-85173.herokuapp.com/item",
      item
    );
    console.log(data.acknowledged);
    if (data.acknowledged === true) {
      await Swal.fire({
        title: "Success!",
        text: "Item Added Successfully!",
        icon: "success",
        confirmButtonText: "Proceed",
      });
      navigate("/myItems");
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container py-4 addItem-container">
      <PageTitle title="Add Items"></PageTitle>
      <h2 className="header">Add New Item</h2>
      <div className="addItem-form-section">
        <div className="info-container">
          <img src={addItemImage} alt="" />
          <h5>
            "Fill out the form with all of the required information. Make
            certain that the <strong>item price</strong> and{" "}
            <strong>item quantity</strong> are positive numbers. Provide an
            internet URL for the item image in the{" "}
            <strong>item image URL</strong> field. You can use the{" "}
            <a href="https://imgbb.com/" target="_blank">
              ImgBB
            </a>{" "}
            website to save photographs online and obtain URL links if
            necessary."
          </h5>
        </div>
        <div className="form-container">
          <form onSubmit={handleAddItem}>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Tom Cruz"
                required
              />
              <label htmlFor="name">Item Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                name="supplierName"
                id="supplierName"
                placeholder="Tom Cruz"
                required
              />
              <label htmlFor="supplierName">Supplier Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                name="description"
                id="description"
                placeholder="description"
                required
              />
              <label htmlFor="description">Item Descrption</label>
            </div>
            <small className="text-danger">{priceMessage}</small>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                placeholder="99"
                required
              />
              <label htmlFor="price">Item Price ($)</label>
            </div>
            <small className="text-danger">{quantityMessage}</small>
            <div className="form-floating mb-2">
              <input
                type="number"
                className="form-control"
                name="quantity"
                id="quantity"
                placeholder="10"
                required
              />
              <label htmlFor="quantity">Item Quantity</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                placeholder="image@onlinehostingserver.com"
                required
              />
              <label htmlFor="image">Item Image URL</label>
            </div>

            <div className="add-item-btn">
              <input type="submit" value="Add Item" />
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddItem;
