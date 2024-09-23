import React, { useEffect, useState } from 'react';
import './BestSeller.css';
import arrow from '../../img/fovorit/Arrow.png';
import seting from '../../img/Best/Filter.svg';
import serch from '../../img/Best/Icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BestPost from './bestPost/BestPost';

export default function BestSeller() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  // Состояния для бестселлеров, загрузки и ошибок
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        // Фильтруем продукты, которые являются бестселлерами
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?filters[isBest][$eq]=true&populate=img`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        setBestsellers(res.data.data); // Сохраняем данные
      } catch (err) {
        setError('An error occurred while loading bestsellers'); // Сохраняем сообщение об ошибке
      } finally {
        setLoading(false); // Останавливаем загрузку
      }
    };
    fetchBestsellers();
  }, []);

  // Функция для отображения индикатора загрузки
  const renderLoading = () => (
    <div className="loading-square center-content">
      <i className="fas fa-spinner"></i>
      <p>Loading bestsellers...</p>
    </div>
  );

  // Функция для отображения ошибки
  const renderError = () => (
    <div className="error-square center-content">
      <i className="fas fa-exclamation-triangle"></i>
      <p>{error}</p>
    </div>
  );

  return (
    <div className='Best_wrap'>
      <header>
        <div className='wrapperbest'>
          <div className='bestbut' onClick={handleBackClick}>
            <img className='best_circle' src={arrow} alt="Back" />
          </div>

          <div className="best_text">
            <h1>Best Sellers</h1>
          </div>

          <div className='bestcor'>
            <div className="seting">
              <img className='best_set' src={seting} alt="Filter" />
            </div>

            <div className="serch">
              <img className='best_set' src={serch} alt="Search" />
            </div>
          </div>
        </div>
      </header>

      <section className='best'>
        <div className='bestcart'>
          {/* Отображение загрузки, ошибки или данных */}
          {loading ? (
            renderLoading() // Показываем индикатор загрузки
          ) : error ? (
            renderError() // Показываем сообщение об ошибке
          ) : bestsellers.length > 0 ? (
            bestsellers.map((item) => (
              <BestPost item={item} key={item.id} />
            ))
          ) : (
            <p>No bestsellers found.</p> // Если данных нет, выводим сообщение
          )}
        </div>
      </section>
    </div>
  );
}
