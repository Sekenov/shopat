import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./detail.css";
import backButton from "./img/backButton.svg";
import cart from './img/Cart.svg';

export default function Detail() {
  const { id } = useParams(); // Получаем ID продукта из URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}?populate[img]=*&populate[sizes]=*`, {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          });
          console.log('Fetched product data:', res.data); // Отладочное сообщение
          setProduct(res.data.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product.</p>;
  if (!product) return <p>Product not found.</p>;

  const AddToCart = () => {
    navigate('/cart');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='mainBlock'>
        <div className='header-details'>
          <div className='but1' onClick={handleBackClick}><img src={backButton} alt="Back" /></div>
          <div className='but2'>{product.attributes.category}</div>
          <div className='but3'><img src={cart} alt="Cart" /></div>
        </div>

        <div className='photo-details'>
          <img src={`${process.env.REACT_APP_UPLOAD_URL}${product.attributes.img?.data?.[0]?.attributes?.url}`} alt={product.attributes.title} />
        </div>

        <div className='detail-details'>
          <div className='text-details'>
            <div className='title-details'>
              <h3 className='bestSeller'>{product.attributes.isBest ? 'BEST SELLER' : ''}</h3>
              <h2 className='title'>{product.attributes.title}</h2>
            </div>
            <p className='price'>${product.attributes.price}</p>
            <p className='about'>{product.attributes.description}</p>
          </div>

          <div className='gallery-details'>
            <h2 className='gallery-text'>Gallery</h2>
            <div className='gallery-type'>
              {product.attributes.img?.data?.map((imgItem, index) => (
                <div className='gallery-box' key={index}>
                  <img src={`${process.env.REACT_APP_UPLOAD_URL}${imgItem.attributes.url}`} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className='size-details'>
            <h2 className='size-text'>Size</h2>
            <div className='size-type'>
              {product.attributes.sizes?.data?.map((sizeItem, index) => (
                <div className='size-box' key={index}>
                  {sizeItem.attributes.size} {/* Убедитесь, что имя поля `size` правильно */}
                </div>
              )) || <p>No sizes available</p>}
            </div>
          </div>

          <div className="accept-details">
            <div className="price-details">
              <p className="price-text">Price</p>
              <p className='price-amount'>${product.attributes.price}</p>
            </div>
            <button className="accept-button" onClick={AddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
