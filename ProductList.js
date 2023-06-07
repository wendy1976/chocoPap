import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import ProductFilter from './ProductFilter';

import image1 from "./assets/imagesEtLogo/images/produit1.1.jpg";
import image2 from "./assets/imagesEtLogo/images/produit2.jpg";
import image3 from "./assets/imagesEtLogo/images/produit3.jpg";
import image4 from "./assets/imagesEtLogo/images/produit4.1.jpg";
import image5 from "./assets/imagesEtLogo/images/produit5.1.jpg";
import image6 from "./assets/imagesEtLogo/images/produit6.1.jpg";
import image7 from "./assets/imagesEtLogo/images/produit7.jpg";
import image8 from "./assets/imagesEtLogo/images/produit8.1.jpg";
import image9 from "./assets/imagesEtLogo/images/produit9.1.jpg";

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [filters, setFilters] = useState({
    category: "Tous",
    price: {
      min: 0,
      max: 100
    },
    rating: {
      min:0,
      max:5
    }
  });

  const handleAddToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      const product = products.find((product) => product.id === productId);

      const productToAdd = {
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      };

      setCartItems([...cartItems, productToAdd]);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const products = [
    {
      id: 1,
      name: "Chocolat noisette cerise",
      description: "Ballotin de 150gr",
      note: 4.50,
      price: 12.99,
      image: image1,
      categories: ["Tous", "Chocolat au lait", "Fruit"]
    },
    {
      id: 2,
      name: "Chocolat au lait caramel",
      description: "Ballotin de 300gr",
      note: 3.50,
      price: 25.15,
      image: image2,
      categories: ["Tous", "Chocolat au lait", "Caramel"]
    },
    {
      id: 3,
      name: "Chocolat liqueur cerise",
      description: "Ballotin de 150gr",
      note: 4.00,
      price: 14.99,
      image: image3,
      categories: ["Tous", "Chocolat au lait", "Fruit", "Liqueur"]
    },
    {
      id: 4,
      name: "Chocolat blanc coeur",
      description: "Ballotin de 300gr",
      note: 4.80,
      price: 35.15,
      image: image4,
      categories: ["Tous", "Chocolat blanc"]
    },
    {
      id: 5,
      name: "Chocolat au lait noisette",
      description: "Ballotin de 300gr",
      note: 3.50,
      price: 25.55,
      image: image5,
      categories: ["Tous", "Chocolat au lait", "Noix-noisette"]
    },
    {
      id: 6,
      name: "Chocolat blanc et au lait",
      description: "Ballotin de 150gr",
      note: 4.50,
      price: 14.99,
      image: image6,
      categories: ["Tous", "Chocolat au lait", "chocolat blanc"]
    },
    {
      id: 7,
      name: "Rocher praliné à la fraise",
      description: "Ballotin de 150g",
      note: 3.00,
      price: 14.99,
      image: image7,
      categories: ["Tous", "Chocolat au lait", "Fruit"]
    },
    {
      id: 8,
      name: "Chocolat noir Love",
      description: "Ballotin de 300g",
      note: 4.00,
      price: 25.55,
      image: image8,
      categories: ["Tous", "Chocolat noir"]
    },
    {
      id: 9,
      name: "Chocolat au lait pétillant",
      description: "Ballotin de 300g",
      note: 2.50,
      price: 25.15,
      image: image9,
      categories: ["Tous", "Chocolat au lait"]
    },
  ];

  const filteredProducts = products.filter((product) => {
    // Filtrage par catégorie
    if (filters.category !== "Tous" && !product.categories.includes(filters.category)) {
      return false;
    }

    // Filtrage par prix
    if (
      filters.price.min !== "" &&
      filters.price.max !== "" &&
      (product.price < filters.price.min || product.price > filters.price.max)
    ) {
      return false;
    }

    // Filtrage par note
  if (filters.rating.min !== "" && filters.rating.max !== "" && (product.note < filters.rating.min || product.note > filters.rating.max)) {
    return false;
  }

    return true;
  });

  return (
     <div>
      <ProductFilter filters={filters} setFilters={setFilters} />

      <div className="product-list row">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            note={product.note}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {showPopup && <div className="popup">Produit ajouté au panier !</div>}
    </div>
  );
};

export default ProductList;
