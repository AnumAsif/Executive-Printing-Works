import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-one">
        <h3>Product Type</h3>
        <div className="filter-group">
          <div className="filter-item">
            <input
              type="checkbox"
              id="books-reports"
              onChange={() => onFilterChange('productType', 'Books & Reports')}
            />
            <label htmlFor="books-reports">Books & Reports</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="marketing"
              onChange={() => onFilterChange('productType', 'Marketing')}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="business"
              onChange={() => onFilterChange('productType', 'Business')}
            />
            <label htmlFor="business">Business</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="cards"
              onChange={() => onFilterChange('productType', 'Cards')}
            />
            <label htmlFor="cards">Cards</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="calendars"
              onChange={() => onFilterChange('productType', 'Calendars')}
            />
            <label htmlFor="calendars">Calendars</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="custom-products"
              onChange={() => onFilterChange('productType', 'Custom Products')}
            />
            <label htmlFor="custom-products">Custom Products</label>
          </div>
        </div>
      </div>
      
      <div className="filter-two">
        <h3>Binding Type</h3>
        <div className="filter-group">
          <div className="filter-item">
            <input
              type="checkbox"
              id="saddle-stitch"
              onChange={() => onFilterChange('bindingType', 'Saddle Stitched')}
            />
            <label htmlFor="saddle-stitch">Saddle Stitch</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="perfect-bound"
              onChange={() => onFilterChange('bindingType', 'Perfect Bound')}
            />
            <label htmlFor="perfect-bound">Perfect Bound</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="spiral-bound"
              onChange={() => onFilterChange('bindingType', 'Spiral Bound')}
            />
            <label htmlFor="spiral-bound">Spiral Bound</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="wire-o-bound"
              onChange={() => onFilterChange('bindingType', 'Wire-O Bound')}
            />
            <label htmlFor="wire-o-bound">Wire-O Bound</label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="hard-cover"
              onChange={() => onFilterChange('bindingType', 'Hard Cover')}
            />
            <label htmlFor="hard-cover">Hard Cover</label>
          </div>
        </div>
      </div>
      <div className="filter-three">
        <h3>Finishing Type</h3>
        <div className="filter-group">
            <div className="filter-item">
            <input
                type="checkbox"
                id="lamination"
                onChange={() => onFilterChange('finishingType', 'Lamination')}
            />
            <label htmlFor="lamination">Lamination</label>
            </div>
            <div className="filter-item">
            <input
                type="checkbox"
                id="gold-foil"
                onChange={() => onFilterChange('finishingType', 'Gold Foil')}
            />
            <label htmlFor="gold-foil">Gold Foil</label>
            </div>
            <div className="filter-item">
            <input
                type="checkbox"
                id="colored-foil"
                onChange={() => onFilterChange('finishingType', 'Colored Foil')}
            />
            <label htmlFor="colored-foil">Colored Foil</label>
            </div>
            <div className="filter-item">
            <input
                type="checkbox"
                id="die-stamping"
                onChange={() => onFilterChange('finishingType', 'Die Stamping')}
            />
            <label htmlFor="die-stamping">Die Stamping</label>
            </div>
            <div className="filter-item">
            <input
                type="checkbox"
                id="die-cutting"
                onChange={() => onFilterChange('finishingType', 'Die Cutting')}
            />
            <label htmlFor="die-cutting">Die Cutting</label>
            </div>
            <div className="filter-item">
            <input
                type="checkbox"
                id="thermo-embossing"
                onChange={() => onFilterChange('finishingType', 'Thermo Embossing')}
            />
            <label htmlFor="thermo-embossing">Thermo Embossing</label>
            </div>
        </div>
        </div>

    </div>
  );
};

export default FilterSidebar;
