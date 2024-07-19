import React from 'react';
import Contactenos from './5_Contactenos'; // Importamos el componente 5_Contactenos

// bueno esto funciona gracias a que instale el fontawesome , todo esto lo traje del trabajo pasado
function Servicios() {
  return (
    <section id="servicios" className="content">
      <h2 className="title">Servicios</h2>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-print"></i> 
          <h3>Impresoras</h3>
          <p>Mantenimiento y reparación de impresoras</p>
        </div>
        <div className="box">
          <i className="fas fa-desktop"></i>
          <h3>Computación</h3>
          <p>Soporte técnico para equipos computacionales</p>
        </div>
        <div className="box">
          <i className="fas fa-cogs"></i>
          <h3>Software</h3>
          <p>Desarrollamos y mantenemos aplicaciones personalizadas</p>
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-server"></i>
          <h3>Servidores</h3>
          <p>Instalación, configuración y mantenimiento de servidores</p>
        </div>
        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>Soporte en tiempo real</h3>
          <p>Resolviendo cualquier incidencia de manera rápida y efectiva.</p>
        </div>
        <div className="box">
          <i className="fas fa-tools"></i>
          <h3>Hardware</h3>
          <p>Instalación y reparación de componentes</p>
        </div>
      </div>
      <Contactenos /> {/* Anidamos el componente Contactenos dentro de 4_Servicios */}
    </section>
  );
}

export default Servicios;
