import React, { useEffect, useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../card/Card';
import SeePost from '../allprouct/seeAllProduct/seePost/SeePost';
import useFetch from '../../hooks/useFetch'; // Импортируем как экспорт по умолчанию

export default function Post() {
  // Запрос для бестселлеров
  const { data: bestsellers = [], loading: loadingBestsellers, error: errorBestsellers } = useFetch(`/products?filters[isBest][$eq]=true&populate=img`);

  // Запрос на новые продукты
  const [data, setData] = useState([]);
  const [loadingNew, setLoadingNew] = useState(true);
  const [errorNew, setErrorNew] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }); 
        setData(res.data.data);
      } catch (err) {
        setErrorNew(err);
      } finally {
        setLoadingNew(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="Popular">
        <div className="PopularText">
          <h1 className='bestPopular'>Best Seller</h1>
          <div className="text-popular">
            <Link to={"/bestseller"}>See all</Link>
          </div>
        </div>
        <div className="wrapcart">
          {loadingBestsellers ? <p>Loading...</p> : errorBestsellers ? <p>Error loading bestsellers.</p> : bestsellers.length > 0 ? (
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
          <h1 className='newPopularTitle'>New Arrivals</h1>
          <Link to={"/allproduct"}>See all</Link>
        </div>
      </section>
      <div className="wrapcart">
        {loadingNew ? <p>Loading...</p> : errorNew ? <p>Error loading new products.</p> : data.length > 0 ? (
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
