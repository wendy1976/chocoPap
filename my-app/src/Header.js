import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/imagesEtLogo/images/logo.png';


function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar className="bgYellow px-5" expand="lg" id="navbar">
        <img src={Logo} alt="logo" id="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">
              <h1 className="h3">Accueil</h1>
            </Link>
            <Link to="/boutique" className="nav-link">
              <h1 className="h3">Boutique</h1>
            </Link>
            <Link to="#" className="btn btnPanier nav-link"  onClick={handleCartClick}>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={isCartOpen} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Fermer
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;