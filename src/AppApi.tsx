import React from 'react';
import './index.css'; //no llamo abajo la imagen ya que importe el archivo de los css donde tengo definida la imagen

import MarvelComponent from './components/9_ApiComponent.tsx';

//en el div le asigno la clase Fondo para añadir la imagen de fondo en la pagina web
function App() {
  return (
    <div className="Fondo">
      <MarvelComponent />
    </div>
  );
}

export default App;

