import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Import de mes routes
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
//Import des mes composants pour la page à l'écran de mon localhost
import Header from './Header';
import CarouselComponent from './CarouselComponent';
import Footer from './Footer';

function App() {
  return (
    <div>
    <Header />
    <Router>
      <AppRoutes />
    </Router>
    <CarouselComponent />
    <Footer />
    
    </div>
  );
}

export default App;

