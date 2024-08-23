import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Detail from './pages/details/Detail';
import MainPage from './pages/mainPage/MainPage';
import Purchase from './pages/purchase/Purchase';
import Profile from './pages/profile/Profile';
import Favorit from './pages/favourite/Favorit';
import BestSeller from "./pages/bestseller/BestSeller";
import AllProduct from "./pages/allprouct/AllProduct";
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import AddProduct from './pages/addProduct/AddProduct';
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
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/addproduct" element={<AddProduct />}/>
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
