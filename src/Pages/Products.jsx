import React, { useState } from 'react';
import FilterSidebar from '../Components/FilterSidebar/FilterSidebar';
import ProductList from '../Components/ProductList/ProductList';
import './CSS/Products.css';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import aboutUsImage from '../Components/Assets/printingpaper.jpg';

const ProductsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    productType: [], // Changed 'category' to 'productType'
    bindingType: [],
    finishingType:[]
  });

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters(prevFilters => {
      const updatedFilterValues = prevFilters[filterType].includes(filterValue)
        ? prevFilters[filterType].filter(value => value !== filterValue) // Remove filter if already selected
        : [...prevFilters[filterType], filterValue]; // Add filter if not already selected

      return {
        ...prevFilters,
        [filterType]: updatedFilterValues
      };
    });
  };

  return (
    <div className="products-page">
        {/* <Hero2 image={aboutUsImage} heading="Products" /> */}
        <FilterSidebar onFilterChange={handleFilterChange} />
        <ProductList filters={selectedFilters} />
    </div>
   
  );
};

export default ProductsPage;
