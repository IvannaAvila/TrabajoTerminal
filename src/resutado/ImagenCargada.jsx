import React from 'react';
import { useImagenContext } from '../context';
import './resultados.css';
import { Link } from 'react-router-dom';
// ImagenCargada.jsx


function ImagenCargada() {
  const { imagenCargada } = useImagenContext();

  return (
    <div className='flex text-center justify-center'>
      <div >
        <h1 className='text-xl font-semibold text-gray-700 mb-4'>
          Imagen Cargada
        </h1>
        {imagenCargada && (
          <>
            <div className='mb-10'>
              <img
                src={URL.createObjectURL(imagenCargada)}
                alt={`Imagen Cargada`}
                style={{ width: '200px', height: '300px' }}
                className='hover:scale-105 transition duration-500 ease-in-out transform'
              />
            </div>
            <Link to="subir-imagen" className="mt-8 px-4 py-2 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded-lg hover:bg-primary-light focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Subir otra imagen</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ImagenCargada;

