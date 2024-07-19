// Importa React, que es la biblioteca principal de React
import React from 'react';

// Importa ReactDOM, que es responsable de renderizar la aplicación en el DOM
import ReactDOM from 'react-dom';

// Importa el archivo CSS principal para la aplicación
import './index.css';

// Importa el componente principal 
import AppTerminosLegales from './AppTerminosLegales'; 

// Utiliza ReactDOM.render para renderizar la aplicación en el DOM
ReactDOM.render(
  <React.StrictMode>
    {/* es el componente principal de la aplicación */}
    <AppTerminosLegales />
  </React.StrictMode>,
  document.getElementById('root')
);
  {/* El elemento con ID 'root' en el HTML es donde se renderizará la aplicaciónn */}