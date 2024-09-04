import React, { useState } from "react";
import "./MainPage.css";

import { Link } from "react-router-dom";
import profile from "./img/profile.svg";
import like from "./img/like.svg";
import home from "./img/home.svg";
import addProduct from './img/addProduct.svg'

import Header from "../header/Header";
import Post from "../posts/Post";

function MainPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);


  const handlehomeClick = ()  => {
    setSelectedBrand(null);
  }
  return (
    <>
      <div className="main-page">
        <Header onBrandSelect={setSelectedBrand} /> {/* Передаем функцию для выбора бренда */}
        <Post selectedBrand={selectedBrand} /> 
      </div>

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
    </>
  );
}

export default MainPage;