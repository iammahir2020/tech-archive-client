import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const url = `${process.env.REACT_APP_LOCAL_API}/items`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, []);
  return [items, setItems];
};

export default useItems;
