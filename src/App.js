import React, { useState } from 'react';
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
import ProductByCategory from './pages/header/productByCategory/ProductByCategory';
import Footer from './pages/footer/Footer';
import Search from './pages/search/Search';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
});

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/profile" element={<Profile user={user} />} /> {/* Передаем user в Profile */}
          <Route path="/favorit" element={<Favorit />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signIn" element={<SignIn setUser={setUser}/>} />
          <Route path="/signUp" element={<SignUp setUser={setUser} />} /> {/* Передаем setUser в SignUp */}
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/:id" element={<ProductByCategory />} />
          <Route path="/brand/:brandId" element={<MainPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
