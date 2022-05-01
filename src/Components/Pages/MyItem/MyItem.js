import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MySingleItem from "../../MySingleItem/MySingleItem";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./MyItem.css";
import Swal from "sweetalert2";

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/item?email=${user?.email}`;
      const { data } = await axios.get(url);
      // console.log(data);
      setItems(data);
    };
    getItems();
  }, [user]);

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
        const url = `http://localhost:5000/item?id=${id}`;
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
    <div className="container my-4">
      <PageTitle title="My Items"></PageTitle>
      <h2 className="header">My Item</h2>
      {items.length === 0 && (
        <h2 className="no-item-message">You haven't added any item yet...</h2>
      )}
      <div className="myItems-container">
        {items.map((item) => (
          <MySingleItem
            key={item._id}
            item={item}
            eventListener={handleRemoveItem}
            deleteBtn={true}
          ></MySingleItem>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
