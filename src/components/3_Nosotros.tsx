import React from 'react';
import Servicios from './4_Servicios'; // Importamos el componente 4_Servicios

function Nosotros() {
  return (
    <div>
      <section id="nosotros" className="content">
        <h2 className="title">Nosotros</h2>
        <p>Somos una empresa dedicada a ofrecer servicios técnicos a diversas compañías, comprometidos con el avance tecnológico. Nos enfocamos en brindar soluciones innovadoras y de alta calidad para optimizar el rendimiento y la eficiencia de nuestros clientes. Nuestro equipo de expertos altamente capacitados garantiza un soporte técnico confiable y personalizado, adaptado a las necesidades específicas de cada empresa. Con un enfoque en la excelencia y la satisfacción del cliente, nos esforzamos por ser un socio estratégico en el crecimiento y desarrollo tecnológico de nuestros clientes.</p>
        <Servicios />  {/* Anidamos el componente Servicios dentro de 3_Nosotros */}
      </section>
    </div>
  );
}

export default Nosotros;


                                            
