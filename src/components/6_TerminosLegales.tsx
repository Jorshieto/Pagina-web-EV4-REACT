import React from 'react';

function TerminosLegales() {
  const redirectToTerms = () => {
    window.open('TerminosLegales.html');
  };

  return (
    <div className="barra-separadora">
      <button className="terminos " onClick={redirectToTerms}> {/*Al darle click al boton se activa el onclick y con ello el redirectToTerms*/}
        Términos legales
      </button>
    </div>
  );
}

export default TerminosLegales;
