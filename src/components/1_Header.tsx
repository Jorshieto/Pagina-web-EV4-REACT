import React from 'react';
import Inicio from './2_Inicio'; // Importamos el componente 2_Inicio

// funcion BarraNavegacion contiene los enlaces de navegación
function BarraNavegacion() {
  return (
    <div>
      <nav className="barra_navegacion">
        <a href="#nosotros">Nosotros</a>  {/* Enlace a la sección "Nosotros" */}
        <a href="#servicios">Servicios</a>  {/* Enlace a la sección "Servicios" */}
        <a href="#contacto">Quiero que me contacten</a> {/* Enlace a la sección "Contacto" */}
        <a href="Api.html">API</a> {/* redirecciona a la pagina principal */}
      </nav>
    </div>
  );
}

// Funcion Header es la barra de navegacion del sitio
function Header() {
  return (
    <div>
      <header className="head">  
        <div className="Redireccion_Crud"> {/* Div para la redirección a la página de inicio */}
          <a href="#inicio">Inicio</a>
        </div>
        <BarraNavegacion />      {/* Componente BarraNavegacion anidado dentro del Header */}
        </header>
      <Inicio /> {/* Componente Inicio anidado dentro del Header */}
    </div>  
  );
}

export default Header;
