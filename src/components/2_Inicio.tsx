import React from 'react';
import Nosotros from './3_Nosotros'; // Importamos el componente 3_Nosotros

//basicamente el primer parrafo explicando un poco de que trata la pagian web
function Inicio() {
  return (
    <section id="inicio" className="content">
      <h2 className="title">Inicio</h2>
      <p>¿Buscas un servicio técnico de calidad? ¡Has llegado al lugar correcto!</p>
      <p>Bienvenido a Solventa, tu socio confiable en soluciones técnicas innovadoras y eficientes. Nos dedicamos a ofrecer servicios técnicos de alta calidad a diversas compañías, asegurando que tus sistemas funcionen de manera óptima y sin interrupciones. Descubre más sobre nuestros servicios y cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.</p>
      <Nosotros /> {/* Anidamos el componente Nosotros dentro de 2_Inicio */}
    </section>
  );
}

export default Inicio;


