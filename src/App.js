import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Detail from './pages/details/Detail';
import MainPage from './pages/mainPage/MainPage';
import Purchase from './pages/purchase/Purchase';
import Profile from './pages/profile/Profile';

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
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
