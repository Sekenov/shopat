import React, { useState } from "react";
import "./MainPage.css";

import { Link, useNavigate, useParams } from "react-router-dom";

import BrandPost from "../posts/BrandPost";
import Header from "../header/Header";
import Post from "../posts/Post";
import Footer from "../footer/Footer";

function MainPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для поискового запроса
  const { brandId } = useParams();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };
  return (
    <>
      <div className="main-page">
      <Header 
          onBrandSelect={setSelectedBrand} 
          onSearchSubmit={handleSearchSubmit} 
          setSearchQuery={setSearchQuery} // Передаем функцию
        />        {brandId ? (
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