// Importa React, que es la biblioteca principal de React
import React from 'react';

// Importa ReactDOM, que es responsable de renderizar la aplicación en el DOM
import ReactDOM from 'react-dom';

// Importa el archivo CSS principal 
import './index.css';

// Importa el componente principal en este caso como es una copia de main pero es netamente para que funcione el AppCrud se importa esta 
import AppCrud from './AppCrud';

// Renderiza la aplicación en el elemento con id 'root'
ReactDOM.render(
  <React.StrictMode>
    {/* es el componente principal de la aplicación */}
    <AppCrud />
  </React.StrictMode>,
  document.getElementById('root')
);
  {/* El elemento con ID 'root' en el HTML es donde se renderizará la aplicaciónn */}