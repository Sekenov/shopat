import React, { useState } from "react";
import "./MainPage.css";

import { Link, useParams } from "react-router-dom";

import BrandPost from "../posts/BrandPost";
import Header from "../header/Header";
import Post from "../posts/Post";
import Footer from "../footer/Footer";

function MainPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const { brandId } = useParams();

  
  return (
    <>
      <div className="main-page">
        <Header onBrandSelect={setSelectedBrand} /> {/* Передаем функцию для выбора бренда */}
        {brandId ? (
          <BrandPost brandId={brandId} /> // Показываем компонент для выбранного бренда
        ) : (
          <Post /> // Показываем стандартный Post компонент
        )}
      </div>
      <Footer selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
     
    </>
  );
}

export default MainPage;