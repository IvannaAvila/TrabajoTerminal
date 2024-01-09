import React from 'react';
import ContenedorSuperioracercade from './ContenedorSuperioracercade';
import ContenedorInferioracercade from './ContenedorInferioracercade';
import ContenedorInferior1acercade from './ContenedorInferior1acercade';
class Contenedoracercade extends React.Component {
  render() {
    
    return (
        <div className="contenedor-padreac">
        <div className="contenedorac">
          <div className="contenedor-superiorac">
            <ContenedorSuperioracercade />
          </div>
          <div className="contenedor-inferiorac">
            <ContenedorInferioracercade/>
            <ContenedorInferior1acercade/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contenedoracercade;
