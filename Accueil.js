import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import de mes composants
import Header from './Header';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';

//création de l'objet logo, mis un id pour gérer sa dimension dans mon CSS 
const Logo=() => <img src={require("./assets/imagesEtLogo/images/logo.png")} className="App-logo img-fluid" alt="logo" id="logo"/>;
//Appels de mes composants pour ma page d'accueil
function Accueil() {
  return (
    <div>   
    <Logo />
    <Header />     
    <CarouselComponent />    
    <Footer />
  </div>

  );
}

export default Accueil;
