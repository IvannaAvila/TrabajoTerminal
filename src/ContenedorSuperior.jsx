// ContenedorSuperior.js
import React from 'react';
import Seleccionarimg from './Seleccionimg';
import CapturaImg from './capturarimg';


function ContenedorSuperior() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
        <div >
          Cargar una <span className='text-primary'>Foto</span>
          <Seleccionarimg/>
        </div>
        <div >
          Tomar una <span className='text-primary'>Foto</span>
          <CapturaImg/>
        </div>
      </div>
    </>
  );
}

export default ContenedorSuperior;