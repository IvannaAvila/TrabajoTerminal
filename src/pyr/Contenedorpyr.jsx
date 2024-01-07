import React from 'react';
import ContenedorSuperiorpyr from './ContenedorSuperiorpyr';
import ContenedorInferiorpyr from './ContenedorInferiorpyr';
class Contenedorpyr extends React.Component {
  render() {
    
    return (
        <div className="contenedor-padrepyr">
        <div className="contenedorpyr">
          <div className="contenedor-superiorpyr">
            <ContenedorSuperiorpyr />
          </div>
          <div className="contenedor-inferiorpyr">
            <ContenedorInferiorpyr/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contenedorpyr;
