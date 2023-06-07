import React, { useState } from 'react';
import Modal from 'react-modal';

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartValidated, setIsCartValidated] = useState(false);

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handleClearCart = () => {
    onClearCart();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsCartValidated(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsCartValidated(false);
  };

  const handleValidateCart = () => {
    setIsCartValidated(true);
  };

  return (
    <div >
      <button onClick={handleOpenModal} className='me-3 bgTurquoise' id='panierPopup'>
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div>
          {isCartValidated ? (
            <h2>Votre panier a bien été validé</h2>
          ) : (
            <>
              <h2>Panier</h2>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} width="50" height="50" />
                    <div>
                      <span>{item.name}</span>
                      <span>Prix : {item.price} €</span>
                      <span>Quantité : {item.quantity}</span>
                      <span>Total : {item.price * item.quantity} €</span>
                      <button onClick={() => handleRemoveItem(item.id)}>Supprimer</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <h3>Total Prix: {totalPrice} €</h3>
                <button onClick={handleClearCart}>Réinitialiser le panier</button>
                <button onClick={handleValidateCart}>Valider le panier</button>
              </div>
            </>
          )}
        </div>
        <button onClick={handleCloseModal}>Fermer</button>
      </Modal>
    </div>
  );
};

export default Cart;
