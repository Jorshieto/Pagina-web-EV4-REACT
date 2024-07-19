import React from 'react';
import './index.css'; // Asegúrate de que la ruta sea correcta y que el archivo exista
import PoliticaPrivacidad from './components/8_Politicas';


// al final cree un AppTerminosLegales y un TerminosLegales.html para manejar la redireccion a otras paginas 
function AppTerminosLegales() {
  return (
    <div className="Fondo">
      <PoliticaPrivacidad />
    </div>
  );
}

export default AppTerminosLegales;
