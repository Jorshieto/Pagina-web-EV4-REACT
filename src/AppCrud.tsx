import React from 'react';
import './index.css'; 
import RegistroContactoFunciones from './components/7_Crud';
import TerminosLegales from './components/6_TerminosLegales';

// al final cree un AppCrud y un Crud.html para manejar la redireccion a otras paginas 
const AppCrud: React.FC = () => {
  return (
    <div className="Fondo">
      <RegistroContactoFunciones />
      <TerminosLegales/>
    </div>
  );
}

export default AppCrud;
