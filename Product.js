import React from 'react';

//Création du rendu d'une fiche produit
const Product = ({ id, name, description, price, note, image, onAddToCart }) => {
  return (
    <div className='product-card col-12 col-md-3 bgTurquoise mt-1 ms-1 pt-3 pb-3 me-2'>
      <div id="card" className='border ps-3 pe-2 pb-2'>
        <img className="img-fluid pt-4" src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price"><strong>Prix : {price}€</strong></p>
        <p>Note : {note}/5</p>
        <button onClick={() => onAddToCart(id)}>Ajouter au panier</button>
        </div>
    </div>
  );
};

export default Product;