import React from 'react';
import ContenedorSuperioracercade from './ContenedorSuperioracercade';
import ContenedorInferioracercade from './ContenedorInferioracercade';
import ContenedorInferior1acercade from './ContenedorInferior1acercade';
class Contenedoracercade extends React.Component {
  render() {

    return (
      <div >
        <div className='container m-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 text-center justify-center'>
            <ContenedorInferioracercade />
            <ContenedorInferior1acercade />
          </div>
        </div>
      </div>
    );
  }
}

export default Contenedoracercade;
