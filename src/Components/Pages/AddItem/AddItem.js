import addItemImage from "../../../images/addItem.jpg";
import React, { useState } from "react";
import "./AddItem.css";

const AddItem = () => {
  const [priceMessage, setPriceMessage] = useState("");
  const [quantityMessage, setQuantityMessage] = useState("");
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplierName = event.target.supplierName.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const image = event.target.image.value;

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

    const item = { name, supplierName, description, price, quantity, image };
    console.log(item);
  };
  return (
    <div className="container pt-4 addItem-container">
      <br />
      <h2 className="text-center">Add New Item</h2>
      {/* <p className="text-center">
        Enter the required information below about the new item
      </p> */}
      <div className="addItem-form-section">
        <div className="info-container">
          <h5>
            "Enter all the necessary information in the form provided. Make sure
            that the <strong>item price</strong> and{" "}
            <strong>item quantity</strong> are positive numbers. In the{" "}
            <strong>item image URL</strong> field provide an online URL of the
            item image. If needed you can use the{" "}
            <a href="https://imgbb.com/" target="_blank">
              ImgBB
            </a>{" "}
            website for storing images online and get URL links from there."
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
