import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LiveOrders from './components/LiveOrders';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/LiveOrders" element={<LiveOrders/>}></Route>
      <Route path="*" element={<main><p>There's nothing here!</p></main>}></Route>    </Routes>
    </>
  );
}

export default App;
