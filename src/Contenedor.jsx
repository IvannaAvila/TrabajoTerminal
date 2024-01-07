import React from 'react';
import ContenedorSuperior from './ContenedorSuperior';
import Contenedor2 from './Contenedor2';
import Contenedor3 from './Contenedor3';

class Contenedor extends React.Component {
  render() {
    
    return (
      <div className="contenedor-padre">
        <div className="contenedor">
          <div className="contenedor-superior">
            <ContenedorSuperior />
          </div>
          <div className="contenedor-inferior">
            <Contenedor2 />
            <Contenedor3 />
          </div>
        </div>
      </div>
    );
  }
}

export default Contenedor;
