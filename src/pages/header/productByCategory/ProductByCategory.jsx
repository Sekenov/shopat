import React from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../productCard/ProductCard'; // Предположим, что у вас есть компонент для отображения продукта
import useFetch from '../../../hooks/useFetch';

export default function ProductsByCategory() {
  const { id } = useParams(); // Получаем ID категории из URL
  const { data: products, loading, error } = useFetch(`/products?filters[categories][id][$eq]=${id}&populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="products-container">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
