import logoLight from "../../../images/logoLight.png";
import "./Home.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import MySingleItem from "../../MySingleItem/MySingleItem";
import { useNavigate } from "react-router-dom";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import useItems from "../../../Hooks/useItems";
import AddReview from "../../AddReview/AddReview";

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useItems();
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
        {items.length === 0 ? (
          <h2 className="no-item-message">No Items Added to Inventory...</h2>
        ) : (
          <div className="items-container">
            {items.slice(0, 6).map((item) => (
              <MySingleItem
                key={item._id}
                item={item}
                eventListener={handleUpdateItem}
                deleteBtn={false}
              ></MySingleItem>
            ))}
          </div>
        )}
      </div>
      <div className="container my-5 bar-chart">
        <h2 className="header mb-5">Qunatity of Items in Stock</h2>
        {items.length === 0 ? (
          <h2 className="no-item-message">No Items to Show</h2>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width={100} height={250} data={items}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantity" fill="#212429" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="container my-5">
        {/* <h2 className="header mb-5">Reviews & Suggestions</h2> */}
        <AddReview></AddReview>
      </div>
    </div>
  );
};

export default Home;
