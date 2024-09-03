import React from 'react';


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.attributes.image_url || 'placeholder.jpg'} // Замена на путь изображения
        alt={product.attributes.title}
        className="product-image"   
      />
      <div className="product-info">
        <h2 className="product-title">{product.attributes.title}</h2>
        <p className="product-description">{product.attributes.description}</p>
        <p className="product-price">${product.attributes.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
