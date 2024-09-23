import React, { useEffect, useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../card/Card';
import SeePost from '../allprouct/seeAllProduct/seePost/SeePost';
import useFetch from '../../hooks/useFetch';

export default function Post({ selectedBrand }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = selectedBrand
          ? `${process.env.REACT_APP_API_URL}/products?filters[categories][id][$eq]=${selectedBrand}&populate=*`
          : `${process.env.REACT_APP_API_URL}/products?populate=*`;

        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        setData(res.data.data);
      } catch (err) {
        // Используем строку ошибки, если она доступна, иначе сообщение по умолчанию
        setError(err.response?.data?.message || err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedBrand]);

  const { data: bestsellers = [], loading: loadingBestsellers, error: errorBestsellers } = useFetch(`/products?filters[isBest][$eq]=true&populate=img`);

  // Функция отображения спиннера
  const renderLoading = () => (
    <div className="loading-square">
      <i className="fas fa-spinner"></i>
      <p>Loading...</p>
    </div>
  );

  // Функция для обработки ошибок
  const renderError = (message) => (
    <div className="error-square">
      <i className="fas fa-exclamation-triangle"></i>
      <p>{message}</p>
    </div>
  );

  // Если ошибка, показываем только блок ошибки по центру
  if (error) {
    return renderError(error);
  }

  if (selectedBrand) {
    return (
      <div className="wrapcart">
        {loading ? renderLoading() : data.length > 0 ? (
          data.map((item) => (
            <SeePost item={item} key={item.id} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    );
  }

  return (
    <>
      <section className="Popular">
        <div className="PopularText">
          <h1 className="bestPopular">Best Seller</h1>
          <div className="text-popular">
            <Link to={"/bestseller"}>See all</Link>
          </div>
        </div>
        <div className="wrapcart">
          {loadingBestsellers ? renderLoading() : errorBestsellers ? renderError('Error loading bestsellers.') : bestsellers.length > 0 ? (
            bestsellers.map((item) => (
              <Card item={item} key={item.id} />
            ))
          ) : (
            <p>No bestsellers found.</p>
          )}
        </div>
      </section>
      <section className="New">
        <div className="NewText">
          <h1 className="newPopularTitle">New Arrivals</h1>
          <Link to={"/allproduct"}>See all</Link>
        </div>
      </section>
      <div className="wrapcart">
        {loading ? renderLoading() : data.length > 0 ? (
          data.map((item) => (
            <SeePost item={item} key={item.id} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
