import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import products from '../Assets/products.js';

const ProductList = ({ filters }) => {
  const filteredProducts = products.filter(product => {
    // Filter by product type
    const matchesProductType = 
      filters.productType.length === 0 || filters.productType.includes(product.category);

    // Filter by binding type
    const matchesBindingType = 
      filters.bindingType.length === 0 || filters.bindingType.includes(product.binding_type);

    // Filter by finishing type
    const matchesFinishingType = 
      filters.finishingType.length === 0 || product.finishing_type.some(type => filters.finishingType.includes(type));
  
    return matchesProductType && matchesBindingType && matchesFinishingType;
  });

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products match the selected filters.</p>
      )}
    </div>
  );
};

export default ProductList;
    