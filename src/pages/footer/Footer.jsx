import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import profile from "./img/profile.svg"
import like from "./img/like.svg";
import home from "./img/home.svg";
import addProduct from './img/addProduct.svg'
export default function Footer({ setSelectedBrand}) {
    const handlehomeClick = ()  => {
        setSelectedBrand(null);
      }
  return (
     <div className="blockFooter">
    <div className="footer">
      <div className="but1">
        <Link to={"/favorit"}>
          <img src={like} alt="" />
        </Link>
      </div>
      <div className="but1">
        <Link to={"/"} onClick={handlehomeClick}>
          <img src={home} alt="" />
        </Link>
      </div>
      <div className="but1">
        <Link to={"/addproduct"}>
          <img src={addProduct} alt="" />
        </Link>
      </div>
      <div className="but1">
        <Link to={"/profile"}>
          <img src={profile} alt="" />
        </Link>
      </div>
    </div>
  </div>
  )
}
