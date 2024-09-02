import React from 'react';
import './seePost.css';

export default function SeePost({ item }) {
    // Проверяем, существует ли объект img и его вложенные данные
    const imgData = item.attributes.img?.data?.[0]?.attributes?.url;
    const imageUrl = imgData ? process.env.REACT_APP_UPLOAD_URL + imgData : process.env.REACT_APP_DEFAULT_IMAGE_URL;

    return (
        <div className="SeePopular_card">
            <div className="Popular_image">
                <img src={imageUrl} alt={item.attributes.title || "Product"} />
            </div>
            <div className='padd'>
                <div className="Popular_text">
                    {item.attributes.categories?.data?.length > 0 && (
                        <div className="categories">
                            {item.attributes.categories.data.map((category) => (
                                <span key={category.id} className="category-tag">
                                    {category.attributes.name}
                                </span>
                            ))}
                        </div>
                    )}
                    <h2>{item.attributes.title}</h2>
                </div>
                <div className="buy">
                    <p>${item.attributes.price.toFixed(2)}</p>
                    <button className="add-to-cart">+</button>
                </div>
            </div>
        </div>
    );
}
