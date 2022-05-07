import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/items`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, []);
  return [items, setItems];
};

export default useItems;
