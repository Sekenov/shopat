import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SeePost from './seePost/SeePost';

export default function SeeAllProduct() {
  const [data, setData] = useState([]);
  const renderLoading = () => (
    <div className="loading-square center-content">
      <i className="fas fa-spinner"></i>
      <p>Loading bestsellers...</p>
    </div>
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        console.log(res.data.data); // Убедитесь, что структура данных соответствует вашим ожиданиям
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='Popular'>
        <div className='wrapcart'>
          {data.length > 0 ? (
            data.map((item) => (
              <SeePost item={item} key={item.id} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </>
  );
}
