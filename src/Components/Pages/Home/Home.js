import logoLight from "../../../images/logoLight.png";
import "./Home.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import MySingleItem from "../../MySingleItem/MySingleItem";
import { useNavigate } from "react-router-dom";
import useItems from "../../../Hooks/useItems";
import Reviews from "../../Reviews/Reviews";
import Chart from "../../Chart/Chart";

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
        <div className="navigate-btn-container">
          <button onClick={() => navigate("/manage")} className="navigate-btn">
            Manage Inventories
          </button>
        </div>
      </div>
      <div className="container my-5 bar-chart">
        <h2 className="header">Qunatity of Items in Stock</h2>
        <p className="mb-5 text-center">Items in Stock {items.length}</p>
        {items.length === 0 ? (
          <h2 className="no-item-message">No Items to Show</h2>
        ) : (
          <Chart items={items}></Chart>
        )}
      </div>
      <div className="review-section container">
        <h2 className="header mb-5">Reviews / Suggestions</h2>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
