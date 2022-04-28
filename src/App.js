import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/Components/Shared/Header/Header";
import Footer from "../src/Components/Shared/Footer/Footer";
import Home from "../src/Components/Pages/Home/Home";
import Login from "../src/Components/Pages/Login/Login";
import Register from "../src/Components/Pages/Register/Register";
import Blogs from "../src/Components/Pages/Blogs/Blogs";
import Inventory from "../src/Components/Pages/Inventory/Inventory";
import ManageInventory from "../src/Components/Pages/ManageInventory/ManageInventory";
import AddItem from "../src/Components/Pages/AddItem/AddItem";
import MyItem from "../src/Components/Pages/MyItem/MyItem";
import PageNotFound from "./Components/Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
        <Route
          path="/manage"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/add" element={<AddItem></AddItem>}></Route>
        <Route path="/myItems" element={<MyItem></MyItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
