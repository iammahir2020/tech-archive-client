import logoLight from "../../../images/logoLight.png";
import React, { useEffect, useState } from "react";
import "./Home.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";
import MySingleItem from "../../MySingleItem/MySingleItem";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/items?number=6`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, []);
  const handleUpdateItem = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <div className="banner-container">
        <div className="banner">
          <h3>Manage your inventory</h3>
          <h5>with</h5>
          <img src={logoLight} alt="" />
        </div>
      </div>
      <div className="container my-5">
        <h2 className="header">Inventory</h2>
        <div className="navigate-btn-container">
          <button onClick={() => navigate("/manage")} className="navigate-btn">
            Manage Inventories
          </button>
        </div>
        <div className="items-container">
          {items.map((item) => (
            <MySingleItem
              key={item._id}
              item={item}
              eventListener={handleUpdateItem}
              deleteBtn={false}
            ></MySingleItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
