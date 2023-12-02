import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import de mes composants
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';


//Appels de mes composants pour ma page boutique
function Boutique() {
  return (
    <div>      
      <Header />     
        <h1 className="text-center orange mb-0 mt-3 pt-0 pb-5 boutique">BOUTIQUE</h1>  
      <ProductList />      
      <Footer />
    </div>
  );
}

export default Boutique;
