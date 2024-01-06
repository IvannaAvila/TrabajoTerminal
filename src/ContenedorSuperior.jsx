// ContenedorSuperior.js
import React from 'react';
import Seleccionarimg from './Seleccionimg';
import CapturaImg from './capturarimg';


function ContenedorSuperior() {
  return (
    <div className="contenedorSuperior">
      <div className='seleccionarimg'>
        <Seleccionarimg/>
      </div>
      <div className='botonfoto'>
            <CapturaImg/>
      </div>
    </div>
  );
}

export default ContenedorSuperior;