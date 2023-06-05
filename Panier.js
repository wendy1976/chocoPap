import React, { useState } from 'react';



const produits = [
  { nom: 'Chocolat noisette cerise', image: "/imagesEtLogo/images/produit1.1.jpg", description: "Ballotin de 150gr", prix: 12.99, categorie: ["Tous", "Chocolat au lait", "Fruit"], note: 4.5, button: "Ajouter au panier" },
  { nom: 'Chocolat au lait caramel', image: '/imagesEtLogo/images/produit2.1.jpg', description: "Ballotin de 300gr", prix: 25.00, categorie: ["Tous", "Chocolat au lait", "Caramel"], note: 3.5, button: "Ajouter au panier" },
  // ... Ajoutez les autres produits ici
];


function Panier() {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    updateCartTotal(updatedCartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    updateCartTotal(updatedCartItems);
  };

  const updateCartTotal = (updatedCartItems) => {
    let total = 0;
    let quantity = 0;

    updatedCartItems.forEach((item) => {
      total += item.prix * item.quantity;
      quantity += item.quantity;
    });

    setTotalPrice(total);
    setTotalQuantity(quantity);
  };

  return (
    <div>
    
      <button id="closeCartButton" onClick={() => setCartItems([])}>Fermer</button>

      {cartItems.map((item, index) => (
        <div key={index} className="cart-product">
          <img src={item.image} alt={item.nom} />
          <h3>{item.nom}</h3>
          <p>Prix : {item.prix} €</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => {
              const value = e.target.value;
              const updatedCartItems = [...cartItems];
              updatedCartItems[index].quantity = value;
              setCartItems(updatedCartItems);
              updateCartTotal(updatedCartItems);
            }}
          />
          <button onClick={() => removeFromCart(index)}>Supprimer</button>
        </div>
      ))}

      <p id="totalProducts">{totalQuantity}</p>
      <p id="totalFinal">{totalPrice.toFixed(2)} €</p>
    

      {produits.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.nom} />
          <button onClick={() => addToCart({ ...product, quantity: 1 })}>
            {product.button}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Panier;