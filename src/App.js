import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="*" element={<main><p>There's nothing here!</p></main>}></Route>    </Routes>
    </>
  );
}

export default App;
