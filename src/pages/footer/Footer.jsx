import React from 'react';
import './footer.css';
import { Link, useNavigate } from 'react-router-dom';
import profile from "./img/profile.svg";
import like from "./img/like.svg";
import home from "./img/home.svg";
import addProduct from './img/addProduct.svg';

export default function Footer() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Перенаправляем на главную страницу
  };

  return (
    <div className="blockFooter">
      <div className="footer">
        <div className="but1">
          <Link to="/favorit">
            <img src={like} alt="Favorites" />
          </Link>
        </div>
        <div className="but1">
          <Link to="/" onClick={handleHomeClick}>
            <img src={home} alt="Home" />
          </Link>
        </div>
        <div className="but1">
          <Link to="/addproduct">
            <img src={addProduct} alt="Add Product" />
          </Link>
        </div>
        <div className="but1">
          <Link to="/profile">
            <img src={profile} alt="Profile" />
          </Link>
        </div>
      </div>
    </div>
  );
}
