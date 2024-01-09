import React from 'react';

import { useURLContext } from '../Urlcontext';
import './resultados.css';

function URLCargada() {
  const { URLCargada } = useURLContext();

  return (
    <div className='imgcargada'>
      <p>Imagen Cargada</p>
      <div>
        {URLCargada && (
          <div className='muestraimagen'>
            <img
              src={URLCargada}
              alt='Imagen Cargada'
              className='result'
              style={{ width: '150px', height: '250px' }} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default URLCargada;
 