import React from 'react';
import { useImagenContext } from '../context';
import './resultados.css';
// ImagenCargada.jsx


function ImagenCargada() {
  const { imagenCargada } = useImagenContext();

  return (
    <div className='imgcargada'>
      Imagen Cargada
      <div className='muestraimagen'>
        {imagenCargada && (
          <div>
            <img
              src={URL.createObjectURL(imagenCargada)}
              alt={`Imagen Cargada`}
              className='result'
              style={{ width: '100px', height: '200px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagenCargada;

