import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//import de la navbar de react-bootstrap
import { Button, Navbar, Nav } from 'react-bootstrap';

//création de l'objet logo, mis un id pour gérer sa dimension dans mon CSS 
const Logo=() => <img src={require("./assets/imagesEtLogo/images/logo.png")} className="App-logo img-fluid" alt="logo" id="logo"/>;
//Création de la barre de navigation at appel du logo
function Header() {
  return (
    <div>
    <Navbar className="bgYellow px-5" expand="lg" id="navbar">
    <Logo />
      <Navbar.Brand href="#accueil"></Navbar.Brand>       
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#accueil"><h1 className='h3'>Accueil</h1></Nav.Link>
          <Nav.Link href="#boutique"><h1 className='h3'>Boutique</h1></Nav.Link>          
        </Nav>       
          <Button type="button" className="btn btnPanier" data-bs-toggle="offcanvas" data-bs-target="#userTools">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
        </Button>        
      </Navbar.Collapse>
    </Navbar>    
  </div>

  );
}

export default Header;
