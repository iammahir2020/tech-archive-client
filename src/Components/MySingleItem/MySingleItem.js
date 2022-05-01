import React from "react";
import "./MySingleItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const MySingleItem = (props) => {
  const { eventListener, item, deleteBtn } = props;
  const { _id, name, supplierName, price, quantity, image } = item;
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

        {deleteBtn ? (
          <div className="singleItem-delete">
            <button onClick={() => eventListener(_id)}>
              <FontAwesomeIcon className="icon" icon={faTrashCan} />
              <p>Remove Item</p>
            </button>
          </div>
        ) : (
          <div className="singleItem-update">
            <button onClick={() => eventListener(_id)}>
              <FontAwesomeIcon className="icon" icon={faPenToSquare} />
              <p>Update</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySingleItem;
