import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./ManageInventory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useItems from "../../../Hooks/useItems";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useItems();

  const handleUpdateItem = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleRemoveItem = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const url = `https://shielded-falls-85173.herokuapp.com/item?id=${id}`;
        const { data } = await axios.delete(url);
        if (data.acknowledged) {
          const remainingItems = items.filter((item) => item._id !== id);
          setItems(remainingItems);
        }
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };
  return (
    <div className="container py-4">
      <PageTitle title="Manage Inventory"></PageTitle>
      <h2 className="header">Manage Inventories</h2>
      <div className="navigate-btn-container">
        <button onClick={() => navigate("/add")} className="navigate-btn">
          Add New Item
        </button>
      </div>
      {items.length === 0 ? (
        <h2 className="no-item-message">No Items Added to Inventory...</h2>
      ) : (
        <div className="table-container table-responsive">
          <Table hover variant="dark">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Supplier Name</th>
                <th>Added By</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  data-toggle="tooltip"
                  data-placement="top"
                  title={`Added By: ${item.creater}`}
                  key={item._id}
                >
                  <td className="table-image">
                    <img src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.supplierName}</td>
                  <td>{item.creater}</td>
                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button className="update-btn">
                      <FontAwesomeIcon
                        onClick={() => handleUpdateItem(item._id)}
                        className="icon"
                        icon={faPenToSquare}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="remove-btn">
                      <FontAwesomeIcon
                        onClick={() => handleRemoveItem(item._id)}
                        className="icon"
                        icon={faTrashCan}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ManageInventory;
