import React, { useEffect, useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../card/Card';

export default function Post() {
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

  return (
    <>
      <section className="Popular">
        <div className="PopularText">
          <h1>Popular Shoes</h1>
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
          <h1>New Arrivals</h1>
          <Link to={"/allproduct"}>See all</Link>
        </div>
        {/* Добавьте сюда код для отображения новых поступлений */}
      </section>
    </>
  );
}
