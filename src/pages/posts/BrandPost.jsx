import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './post.css';
import SeePost from '../allprouct/seeAllProduct/seePost/SeePost';

export default function BrandPost({ brandId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/products?filters[categories][id][$eq]=${brandId}&populate=*`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        setData(res.data.data);
      } catch (err) {
        setError(err.message); // сохраняем сообщение об ошибке
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [brandId]);

  // Индикатор загрузки
  const renderLoading = () => (
    <div className="loading-square center-content">
      <i className="fas fa-spinner"></i>
      <p>Loading..</p>
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
    <div className="wrapcart">
      {loading ? (
        renderLoading()
      ) : error ? (
        renderError()
      ) : data.length > 0 ? (
        data.map((item) => <SeePost item={item} key={item.id} />)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
