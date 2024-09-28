import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './search.css';
import arrow from '../../img/fovorit/Arrow.png';
import search from './img/search.svg';

export default function Search() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние для ошибок
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    if (query) {
      setSearchQuery(query);
      fetchProducts(query); // Запрос продуктов при загрузке страницы
    }
  }, [location]);

  const fetchProducts = async (query) => {
    setIsLoading(true); // Включаем индикатор загрузки
    setError(null); // Сбрасываем ошибки перед новым запросом
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?filters[title][$contains]=${query}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setProducts(data.data || []); // Обновляем состояние с продуктами
    } catch (err) {
      setError(err.message); // Сохраняем сообщение об ошибке
    } finally {
      setIsLoading(false); // Отключаем индикатор загрузки
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  // Индикатор загрузки
  const renderLoading = () => (
    <div className="loading-square center-content">
      <i className="fas fa-spinner"></i>
      <p>Loading...</p>
    </div>
  );

  // Квадрат для ошибки
  const renderError = () => (
    <div className="error-square center-content">
      <i className="fas fa-exclamation-triangle"></i>
      <p>{error || 'An error occurred while loading products.'}</p>
    </div>
  );

  return (
    <div className="search_wrapper">
      <header className='header_search'>
        <div className='wrappersearch'>
          <div className='search_but'>
            <img className='search_circle' onClick={handleBackClick} src={arrow} alt="Back" />
          </div>

          <div className="search_text">
            <h1 className='search_text_head'>Search</h1>
          </div>

          <div className="serch_cancel">
            <h1 className='serch_cancel_text'>Cancel</h1>
          </div>
        </div>
      </header>

      <main className='main_search'>
        <form className="search_form" onSubmit={(e) => { e.preventDefault(); fetchProducts(searchQuery); }}>
          <img className='search_form_but' src={search} alt="Search" />
          <input
            className="search_form_input"
            placeholder="Search Your Shoes"
            required=""
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </main>

      <section className='section_search_wrap'>
        <div className="section_search_title">
          <h1 className='section_search_text'>Shoes</h1>

          <div className="section_search_quest">
            {isLoading ? (
              renderLoading() // Показать индикатор загрузки
            ) : error ? (
              renderError() // Показать ошибку
            ) : products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} >
                  <h2>{product.attributes.title}</h2>
                  <p>{product.attributes.description}</p>
                  <p>Price: ${product.attributes.price}</p>
                </div>
              ))
            ) : (
              <p>К сожалению нету таких товаров</p> // Сообщение, если продуктов нет
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
