import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//Import de mes routes
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';


function App() {
  return (
    <div>
    <Router>   
      <AppRoutes />
    </Router>     
    </div>
  );
}

export default App;



