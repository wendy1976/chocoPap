import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import de mes composants
import Header from './Header';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';



//Appels de mes composants pour ma page d'accueil
function Accueil() {
  return (
    <div>   
      <Header />     
      <CarouselComponent /> 
      <div>
        <a href="boutique" className="btn bgTurquoise h4 btn-lg orange" title="Voir la boutique" id="laBoutique"><strong>VOIR LA BOUTIQUE</strong></a>  
      </div>    
      <Footer />
    </div>
  );
}

export default Accueil;
