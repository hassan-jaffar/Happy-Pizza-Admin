import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LiveOrders from './components/LiveOrders';
import Orders from './components/Orders';
import Customers from './components/Customers';
import ChangePassword from './components/ChangePassword';
import Share from './components/Share';
import BulkSMS from './components/BulkSMS';
import Coupons from './components/Coupons';
import AddCoupon from './components/AddCoupon';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/liveorders" element={<LiveOrders/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/customers" element={<Customers/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      {/* <Route path="/setting" element={<Setting/>}></Route> */}
      <Route path="/coupon" element={<Coupons/>}></Route>
      <Route path="/coupon/create" element={<AddCoupon/>}></Route>
      <Route path="/bulksms" element={<BulkSMS/>}></Route>
      <Route path="/share" element={<Share/>}></Route>
      <Route path="/change-password" element={<ChangePassword/>}></Route>
      <Route path="*" element={<main><p>There's nothing here!</p></main>}></Route>    </Routes>
    </>
  );
}

export default App;
