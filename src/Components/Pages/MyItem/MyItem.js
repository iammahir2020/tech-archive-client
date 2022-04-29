import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MySingleItem from "../../MySingleItem/MySingleItem";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./MyItem.css";

const MyItem = () => {
  const [items, seItems] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/item?email=${user?.email}`;
      const { data } = await axios.get(url);
      seItems(data);
    };
    getItems();
  }, [user]);
  return (
    <div className="container my-4">
      <PageTitle title="My Items"></PageTitle>
      <h2 className="myItems-header">My Item</h2>
      <div className="myItems-container">
        {items.map((item) => (
          <MySingleItem key={item._id} item={item}></MySingleItem>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
