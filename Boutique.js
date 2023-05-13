import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import de mes composants
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

//création de l'objet logo, mis un id pour gérer sa dimension dans mon CSS 
const Logo=() => <img src={require("./assets/imagesEtLogo/images/logo.png")} className="App-logo img-fluid" alt="logo" id="logo"/>;
//Appels de mes composants pour ma page boutique
function Boutique() {
  return (
    <div>   
    <Logo />
    <Header />     
    <ProductList />    
    <Footer />
  </div>

  );
}

export default Boutique;
