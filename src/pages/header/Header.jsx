// Header.jsx
import React from 'react';
import './header.css';
import useFetch from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ onBrandSelect, onSearchSubmit, setSearchQuery }) {
  const navigate = useNavigate();
  const { data: categories, loading, error } = useFetch(`/categories?populate=*`);

  if (loading) return <h1></h1>;
  if (error) return <h1></h1>;

  const displayedCategories = categories?.slice(0, 5);

  const handleCategoryClick = (categoryId) => {
    navigate(`/brand/${categoryId}`);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="headbut">
            <span className="circle"></span>
          </div>

          <form onSubmit={onSearchSubmit} className="formHeader">
            <button type="submit"></button>
            <input
              className="input"
              placeholder="Looking for shoes"
              required=""
              type="text"
              onChange={handleInputChange}
            />
          </form>

          <Link to="/cart">
            <div className="headcor">
              <span className="corzin"></span>
            </div>
          </Link>
        </div>
      </header>

      <main>
        <div className="brands-container">
          {displayedCategories?.map((category) => (
            <div 
              key={category.id} 
              className="category" 
              onClick={() => handleCategoryClick(category.id)}
            >
              <p className='categoryName'>{category.attributes.name}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
