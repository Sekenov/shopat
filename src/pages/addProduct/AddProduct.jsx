import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backButton from "./img/backButton.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './addproduct.css';

export default function AddProduct() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const handleBackClick = () => {
        navigate(-1); 
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Получаем массив выбранных файлов
        const fileURLs = files.map(file => URL.createObjectURL(file)); // Создаем URL для каждого файла
        setImages(prevImages => [...prevImages, ...fileURLs]); // Добавляем новые файлы к существующим
    };

    const handleRemoveImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index)); // Удаляем изображение по индексу
    };

    return (
        <>
            <div className='blockAllProduct'>
                <div className="header-product">
                    <div className="but1" onClick={handleBackClick}>
                        <img src={backButton} alt="" />
                    </div>
                    <div className="but2">Добавить продукт</div>
                </div>

                <div className="AddProduct-inputBlock">
                    <div className="titleName">
                        <p className="title-titleName">Название</p>
                        <input type="text" className='title-product' placeholder='Nike Air Gorrdan'/>
                    </div>

                    <div className="descriptionProduct">
                        <p className="desc-descriptionProduct">Описание</p>
                        <input type="text" className='desc-product' placeholder='Описание товара...'/>
                    </div>

                    <div className="qtyProduct">
                        <p className="qty-qtyProduct">Количество</p>
                        <input type="number" className='qty-product' placeholder='70'/>
                    </div>

                    <div className="colorProduct">
                        <p className="color-colorProduct">Цвет</p>
                        <input type="text" className='color-product' placeholder='Красный'/>
                    </div>

                    <div className="categoryProduct">
                        <p className="category-categoryProduct">Категория</p>
                        <input type="text" className='category-product' placeholder='Обувь'/>
                    </div>

                    <div className="priceProduct">
                        <p className="price-priceProduct">Цена</p>
                        <input type="number" className='price-product' placeholder='2000'/>
                    </div>

                    <div className="photoProduct">
                        <p className="photo-photoProduct">Фото</p>
                        <input
                            type="file"
                            id="file-upload"
                            className='photo-product'
                            onChange={handleFileChange}
                            multiple
                            style={{ display: 'none' }} // Скрываем стандартный input
                        />
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <span>Выберите фотографии</span>
                        </label>
                    </div>

                    {/* Отображение загруженных фотографий с иконками удаления */}
                    <div className="uploaded-photos">
                        {images.map((image, index) => (
                            <div key={index} className="uploaded-image-container">
                                <img src={image} alt={`Загруженное изображение ${index}`} className="uploaded-image" />
                                <FontAwesomeIcon 
                                    icon={faXmark} 
                                    className="delete-icon" 
                                    onClick={() => handleRemoveImage(index)} 
                                />
                            </div>
                        ))}
                    </div>

                    <div className="checkout-button">
                        <button type="submit" className="button-submit">
                            Добавить
                        </button>
                    </div>
                </div>
            </div>  
        </>
    )
}
