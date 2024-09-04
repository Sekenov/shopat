import React, { useState } from "react";
import "./MainPage.css";

import { Link } from "react-router-dom";


import Header from "../header/Header";
import Post from "../posts/Post";
import Footer from "../footer/Footer";

function MainPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);


  
  return (
    <>
      <div className="main-page">
        <Header onBrandSelect={setSelectedBrand} /> {/* Передаем функцию для выбора бренда */}
        <Post selectedBrand={selectedBrand} /> 
      </div>
      <Footer selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
     
    </>
  );
}

export default MainPage;