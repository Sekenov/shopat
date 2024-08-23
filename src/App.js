import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Detail from './pages/details/Detail';
import MainPage from './pages/mainPage/MainPage';
import Purchase from './pages/purchase/Purchase';
import Profile from './pages/profile/Profile';
import Favorit from './pages/favourite/Favorit';
import BestSeller from "./pages/bestseller/BestSeller";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorit" element={<Favorit />} />
          <Route path="/favorit" element={<BestSeller />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
