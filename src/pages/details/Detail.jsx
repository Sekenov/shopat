import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal'; // Импортируем модальное окно
import "./detail.css";
import whiteBack from "./img/whiteBack.svg";
import backButton from "./img/backButton.svg";
import cart from './img/Cart.svg';

Modal.setAppElement('#root'); // Устанавливаем элемент для доступа модальному окну

export default function Detail() {
  const { id } = useParams(); // Получаем ID продукта из URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // Состояние для модального окна и текущего изображения
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}?populate[img]=*&populate[sizes]=*`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
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

  // Открытие модального окна с изображением
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Переход к следующему изображению
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.attributes.img?.data?.length);
  };

  // Переход к предыдущему изображению
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + product.attributes.img?.data?.length) % product.attributes.img?.data?.length
    );
  };

  return (
    <>
      <div className='mainBlock'>
        <div className='header-details'>
          <div className='but1' onClick={handleBackClick}><img src={backButton} alt="Back" /></div>
          <div className='but2'>{product.attributes.category}</div>
          <div className='but3'><img src={cart} alt="Cart" /></div>
        </div>

        {/* Основное изображение */}
        <div className='photo-details'>
          <img 
            src={`${process.env.REACT_APP_UPLOAD_URL}${product.attributes.img?.data?.[0]?.attributes?.url}`} 
            alt={product.attributes.title} 
            onClick={() => openModal(0)} // Открываем модал при клике на основное фото
            style={{ cursor: 'pointer' }} // Добавляем курсор-указатель
          />
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

          {/* Галерея изображений */}
          <div className='gallery-details'>
            <h2 className='gallery-text'>Gallery</h2>
            <div className='gallery-type'>
              {product.attributes.img?.data?.map((imgItem, index) => (
                <div className='gallery-box' key={index} onClick={() => openModal(index)}>
                  <img 
                    src={`${process.env.REACT_APP_UPLOAD_URL}${imgItem.attributes.url}`} 
                    alt={`Gallery image ${index + 1}`} 
                    style={{ cursor: 'pointer' }} // Добавляем курсор-указатель
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='size-details'>
            <h2 className='size-text'>Size</h2>
            <div className='size-type'>
              {product.attributes.sizes?.data?.map((sizeItem, index) => (
                <div className='size-box' key={index}>
                  {sizeItem.attributes.size}
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

      {/* Модальное окно для слайдера */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Image Modal" className="Modal" overlayClassName="Overlay">
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>X</button>
          <img 
            src={`${process.env.REACT_APP_UPLOAD_URL}${product.attributes.img?.data?.[currentImageIndex]?.attributes?.url}`} 
            alt={`Modal Image ${currentImageIndex + 1}`} 
            className="modal-image" 
          />
          <div className="modal-controls">
            <button className="prev-button" onClick={prevImage}><div><img src={backButton} alt="" /></div></button>
            <button className="next-button" onClick={nextImage}><img src={backButton} alt="" /></button>
          </div>
        </div>
      </Modal>
    </>
  );
}
