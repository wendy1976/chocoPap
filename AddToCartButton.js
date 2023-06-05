import React from 'react';

const AddToCartButton = ({ onClick, product }) => {
  return (
    <button onClick={() => onClick(product)}>Ajouter au panier</button>
  );
};

export default AddToCartButton;