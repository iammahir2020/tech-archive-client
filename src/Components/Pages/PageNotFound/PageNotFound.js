import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./PageNotFound.css";
import oopsImg from "../../../images/oops.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="pageNotFound-container">
      <PageTitle title="404 Error"></PageTitle>
      <div className="container pageNotFound-info">
        <img src={oopsImg} alt="" />
        <h5>404 Page not found</h5>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <button onClick={() => navigate("/")}>GO TO HOMEPAGE</button>
      </div>
    </div>
  );
};

export default PageNotFound;
