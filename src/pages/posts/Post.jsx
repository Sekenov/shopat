import React, { useEffect, useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../card/Card';
import SeePost from '../allprouct/seeAllProduct/seePost/SeePost';

export default function Post() {
  // запрос для бэст сэллера
  const [bestsellers, setBestsellers] = useState([]);

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
        console.log(err);
      }
    };
    fetchBestsellers();
  }, []);
// закончилс


// запрос на новые продукты
const [data, setData] = useState([]);

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

// закончился
  return (
    <>
      <section className="Popular">
        <div className="PopularText">
          <h1 className='bestPopular'>Best Seller</h1>
          <div className="text-popular">
            <Link to={"/bestseller"}>See all</Link>
          </div>
        </div>

        {bestsellers.length > 0 ? (
          bestsellers.map((item) => (
            <Card item={item} key={item.id} />
          ))
        ) : (
          <p>No bestsellers found.</p>
        )}
      </section>
      <section className="New">
        <div className="NewText">
          <h1 className='newPopularTitle'>New Arrivals</h1>
          <Link to={"/allproduct"}>See all</Link>
        </div>
      </section>
      {data.length > 0 ? (
            data.map((item) => (
              <SeePost item={item} key={item.id} />
            ))
          ) : (
            <p>No products found.</p>
          )}
    </>
  );
}
