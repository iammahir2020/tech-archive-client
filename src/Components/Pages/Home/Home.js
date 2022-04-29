import logoLight from "../../../images/logoLight.png";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner">
          <h3>Manage your inventory</h3>
          <h5>with</h5>
          <img src={logoLight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
