import React from 'react';

const ProductFilter = ({ filters, setFilters }) => {
 
  const [maxPrice, setMaxPrice] = React.useState(100);
  
  const [maxRating, setMaxRating] = React.useState(5);
  const [minPrice, setMinPrice] = React.useState(0);
const [minRating, setMinRating] = React.useState(0);

  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: e.target.value,
    }));
  };

  const handlePriceChange = (e) => {
    const maxPriceValue = parseFloat(e.target.value);
    setMaxPrice(maxPriceValue);
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        min: minPrice,
        max: maxPriceValue,
      },
    }));
  };
  
  const handleRatingChange = (e) => {
    const maxRatingValue = parseFloat(e.target.value);
    setMaxRating(maxRatingValue);
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: {
        min: minRating,
        max: maxRatingValue,
      },
    }));
  };

  return (
    <div className="filter-container rounded bgYellow" id='filtre'>
      <h2>Filtre</h2>

      <label htmlFor="category-filter">Catégorie :</label>
      <div>
        <input
          type="checkbox"
          id="category-tous"
          value="Tous"
          checked={filters.category === "Tous"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-tous">Tous</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-chocolat-au-lait"
          value="Chocolat au lait"
          checked={filters.category === "Chocolat au lait"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-chocolat-au-lait">Chocolat au lait</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-chocolat-noir"
          value="Chocolat noir"
          checked={filters.category === "Chocolat noir"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-chocolat-noir">Chocolat noir</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-chocolat-blanc"
          value="Chocolat blanc"
          checked={filters.category === "Chocolat blanc"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-chocolat-blanc">Chocolat blanc</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-fruit"
          value="Fruit"
          checked={filters.category === "Fruit"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-fruit">Fruit</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-caramel"
          value="Caramel"
          checked={filters.category === "Caramel"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-caramel">Caramel</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-liqueur"
          value="Liqueur"
          checked={filters.category === "Liqueur"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-liqueur">Liqueur</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="category-noix-noisette"
          value="Noix-noisette"
          checked={filters.category === "Noix-noisette"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-noix-noisette">Noix/Noisette </label>
      </div>

      <label htmlFor="price-filter">Prix minimum :</label>
      <input
        id="min-price-filter"
        type="number"
        step="0.01"
        min="0"
        max={maxPrice}
        value={minPrice}
        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
      />

      <label htmlFor="price-filter">Prix maximum :</label>
      <input
        id="max-price-filter"
        type="number"
        step="0.01"
        min={minPrice}
        max="100"
        value={maxPrice}
        onChange={handlePriceChange}
      />

      <label htmlFor="rating-filter">Note minimale :</label>
      <input
        id="min-rating-filter"
        type="number"
        step="0.1"
        min="0"
        max={maxRating}
        value={minRating}
        onChange={(e) => setMinRating(parseFloat(e.target.value))}
      />

      <label htmlFor="rating-filter">Note maximale :</label>
      <input
        id="max-rating-filter"
        type="number"
        step="0.1"
        min={minRating}
        max="5"
        value={maxRating}
        onChange={handleRatingChange} 
      />
    </div>
  );
};

export default ProductFilter;
