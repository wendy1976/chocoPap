import React, { useEffect, useState } from 'react';

const ProductFilter = ({ filters, setFilters }) => {
   // État local pour les valeurs des filtres
  const [maxPrice, setMaxPrice] = useState(100);
  const [maxRating, setMaxRating] = useState(5);
  const [minPrice, setMinPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  // Gestionnaire de changement de catégorie
  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    const isChecked = e.target.checked;
  
    setFilters((prevFilters) => {
      if (categoryValue === "Tous") {
        if (isChecked) {
          return {
            ...prevFilters,
            category: ["Tous", "Chocolat au lait", "Chocolat noir", "Chocolat blanc", "Fruit", "Caramel", "Liqueur", "Noix-noisette"],
          };
        } else {
          return {
            ...prevFilters,
            category: [],
          };
        }
      } else {
        let updatedCategory = [...prevFilters.category];
  
        if (isChecked) {
          updatedCategory.push(categoryValue);
        } else {
          updatedCategory = updatedCategory.filter((cat) => cat !== categoryValue);
        }
  
        return {
          ...prevFilters,
          category: updatedCategory,
        };
      }
    });
  };
  
  useEffect(() => {
    // Mettre à jour le filtre initial pour cocher la case "Tous" automatiquement
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: [
        'Chocolat au lait',
        'Chocolat noir',
        'Chocolat blanc',
        'Fruit',
        'Caramel',
        'Liqueur',
        'Noix-noisette',
      ],
    }));
  }, [setFilters]);

  // Gestionnaire de changement de prix
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

  // Gestionnaire de changement de note
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

  // Fonction pour basculer l'affichage du filtre
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    // Afficher le filtre en entier pour les écrans plus grands que les mobiles
    const handleResize = () => {
      setShowFilter(window.innerWidth <= 768); // Ajustez la valeur 768 selon vos besoins
    };

    // Vérifier la taille de la fenêtre lors du chargement initial
    handleResize();

    // Vérifier la taille de la fenêtre lorsqu'elle est redimensionnée
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement lorsqu'il n'est plus nécessaire
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12">
        <div
          className={`filter-container rounded bgYellow ${
            showFilter ? 'filter-container-mobile' : ''
          }`}
          id="filtre"
        >
          <h2 onClick={toggleFilter}>Filtre</h2>
          {showFilter ? (
            <div>
              <label htmlFor="category-filter">
                <strong>Catégories:</strong>
              </label>
              <div>
                <input
                  type="checkbox"
                  id="category-tous"
                  value="Tous"
                  checked={filters.category === 'Tous'}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-tous">Tous</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-chocolat-au-lait"
                  value="Chocolat au lait"
                  checked={filters.category.includes('Chocolat au lait')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-chocolat-au-lait">Chocolat au lait</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-chocolat-noir"
                  value="Chocolat noir"
                  checked={filters.category.includes('Chocolat noir')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-chocolat-noir">Chocolat noir</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-chocolat-blanc"
                  value="Chocolat blanc"
                  checked={filters.category.includes('Chocolat blanc')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-chocolat-blanc">Chocolat blanc</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-fruit"
                  value="Fruit"
                  checked={filters.category.includes('Fruit')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-fruit">Fruit</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-caramel"
                  value="Caramel"
                  checked={filters.category.includes('Caramel')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-caramel">Caramel</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-liqueur"
                  value="Liqueur"
                  checked={filters.category.includes('Liqueur')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-liqueur">Liqueur</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category-noix-noisette"
                  value="Noix-noisette"
                  checked={filters.category.includes('Noix-noisette')}
                  onChange={handleCategoryChange}
                />
                <label htmlFor="category-noix-noisette">Noix/Noisette</label>
              </div>
              <span>
                <strong>Prix:</strong>
              </span>
              <br />
              <label htmlFor="price-filter">Prix minimum: </label>
              <input
                id="min-price-filter"
                type="number"
                step="0.01"
                min="0"
                max={maxPrice}
                value={minPrice}
                onChange={(e) => setMinPrice(parseFloat(e.target.value))}
              />

              <label htmlFor="price-filter">Prix maximum: </label>
              <input
                id="max-price-filter"
                type="number"
                step="0.01"
                min={minPrice}
                max="100"
                value={maxPrice}
                onChange={handlePriceChange}
              />
              <br />
              <span>
                <strong>Notes:</strong>
              </span>
              <br />
              <label htmlFor="rating-filter">Note minimale: </label>
              <input
                id="min-rating-filter"
                type="number"
                step="0.1"
                min="0"
                max={maxRating}
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
              />

              <label htmlFor="rating-filter">Note maximale: </label>
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
          ) : (
            <div className="col-sm-12 text-center">
              <button className="btn btn-primary" onClick={() => setShowFilter(true)}>
                Afficher le filtre
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

