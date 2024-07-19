import React from 'react';

//esta función, redirige a la pagina Crud.html u
function Contactenos() {
  const redirectToCrud = () => {   //Usamos la arrow funcion redirectToCrud que se activara mas abajo
    window.location.href = 'Crud.html'; 
  };

  return (
    <div>
      <section id="contacto" className="content">
        <h2 className="title">Quiero que me contacten</h2>
        <p>Si quieres ser contactado por uno de nuestros ejecutivos</p>
        <button className="btn btn-primary last-btn" onClick={redirectToCrud}> {/*Al darle click al boton se activa el onclick y con ello el redirecToCrud*/}
          Presione aquí
        </button>
      </section>
    </div>
  );
}

export default Contactenos;
