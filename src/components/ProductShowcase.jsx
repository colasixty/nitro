import React from 'react';
import './ProductShowcase.css';

const defaultProducts = [
  { id: 'eng', name: 'NITRO ENG', intensity: 'High intensity', price: '10.58 $', image: '/products/nitro-eng.png' },
  { id: 'red', name: 'NITRO RED', intensity: 'High intensity', price: '11.00 $', image: '/products/nitro-red.png' },
  { id: 'green', name: 'NITRO GREEN', intensity: 'High intensity', price: '12.00 $', image: '/products/nitro-green.png', featured: true },
  { id: 'sky', name: 'NITRO SKY', intensity: 'High intensity', price: '11.00 $', image: '/products/nitro-sky.png' },
  { id: 'blue', name: 'NITRO BLUE', intensity: 'High intensity', price: '10.58 $', image: '/products/nitro-blue.png' },
];

export default function ProductShowcase({ products = defaultProducts, onProductClick }) {
  return (
    <section className="nitro-products" aria-label="NITRO energy drink flavours">
      <div className="nitro-products__grid">
        {products.map((product) => (
          <article className={`nitro-product ${product.featured ? 'nitro-product--featured' : ''}`} key={product.id}>
            <button
              className="nitro-product__visual"
              type="button"
              onClick={() => onProductClick?.(product)}
              aria-label={`Select ${product.name}`}
            >
              <img src={product.image} alt={`${product.name} energy drink can`} />
            </button>
            <div className="nitro-product__details">
              <h2>{product.name}</h2>
              <p>{product.intensity}</p>
              <strong>{product.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
