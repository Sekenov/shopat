import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate, useParams } from "react-router-dom";
import BrandPost from "../posts/BrandPost";
import Header from "../header/Header";
import Post from "../posts/Post";
import Footer from "../footer/Footer";

function MainPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { brandId } = useParams();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Перенаправляем на страницу поиска
    }
  };

  return (
    <>
      <div className="main-page">
        <Header 
          onBrandSelect={setSelectedBrand} 
          onSearchSubmit={handleSearchSubmit} 
          setSearchQuery={setSearchQuery} 
        />
        
        {brandId ? (
          <BrandPost brandId={brandId} />
        ) : (
          <Post />
        )}
      </div>
      <Footer selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
    </>
  );
}

export default MainPage;
