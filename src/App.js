import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
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
import { HelmetProvider } from "react-helmet-async";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/inventory/:id"
            element={
              <RequireAuth>
                <Inventory></Inventory>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/manage"
            element={
              <RequireAuth>
                <ManageInventory></ManageInventory>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <RequireAuth>
                <AddItem></AddItem>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myItems"
            element={
              <RequireAuth>
                <MyItem></MyItem>
              </RequireAuth>
            }
          ></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </HelmetProvider>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
