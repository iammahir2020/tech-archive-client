import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Inventory = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <PageTitle title="Update Item"></PageTitle>
      <h2>Inventory</h2>
    </div>
  );
};

export default Inventory;
