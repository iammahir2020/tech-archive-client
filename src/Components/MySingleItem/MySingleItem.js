import React from "react";
import "./MySingleItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MySingleItem = ({ item }) => {
  const { name, supplierName, price, quantity, image } = item;
  return (
    <div className="singleItem-card">
      <div className="singleItem-img">
        <img src={image} alt="" />
      </div>
      <div className="singleItem-info">
        <h4>{name}</h4>
        <p>Supplier: {supplierName}</p>
        <p>
          Price: ${price} <small>/unit</small>{" "}
        </p>
        <h5>In Stock: {quantity} unit</h5>
        <br />
        <div className="singleItem-delete">
          <button>
            <FontAwesomeIcon className="icon" icon={faTrashCan} />
            <p>Remove Item</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleItem;