import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LiveOrders from "./components/LiveOrders";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import ChangePassword from "./components/ChangePassword";
import Share from "./components/Share";
import BulkSMS from "./components/BulkSMS";
import Coupons from "./components/Coupons";
import AddCoupon from "./components/AddCoupon";
import Menu from "./components/Menu";
import ItemManagement from "./components/ItemManagement";
import OrderDetail from "./components/OrderDetail";
import SigninPage from "./components/SigninPage";
import RegisterPage from "./components/RegisterPage";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/liveorders" element={<LiveOrders />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/order-detail/:id/:cid" element={<OrderDetail />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/item-management/:itemid/:categoryid" element={<ItemManagement />}></Route>
        <Route path="/setting" element={<Settings/>}></Route>
        <Route path="/coupon" element={<Coupons />}></Route>
        <Route path="/coupon/create" element={<AddCoupon />}></Route>
        <Route path="/bulksms" element={<BulkSMS />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>{" "}
      </Routes>
    </>
  );
}

export default App;
