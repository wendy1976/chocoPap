import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Boutique from './Boutique';



function AppRoutes() {
  return (
   
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/boutique" element={<Boutique />} />    
    </Routes>
   
  );
}

export default AppRoutes;
