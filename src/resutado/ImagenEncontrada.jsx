import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useImagenContext } from '../context';

function ImagenEncontrada() {
  const [rutaString, setRutaString] = useState()
  const { listRutes, setListRutes } = useImagenContext();
  const location = useLocation();

  useEffect(
    () => {
      const searchParams = new URLSearchParams(location.search);
      const rutaImg = searchParams.get('rutaImg');
      const rutaImgString = rutaImg ? JSON.stringify(rutaImg) : '';
      setRutaString(rutaImgString.substring(1, rutaImgString.length - 1))
      console.log(rutaImgString)

    }
  )
  console.log('recibiendo imagen: ' + rutaString)
  return (
    <div >
      <h1 className='text-xl font-semibold text-gray-700 mb-4'>
        Imagen Encontrada
      </h1>
      <div >
        <div class="grid grid-cols-6 col-span-2   gap-2  ">
          {
            rutaString &&
            listRutes.length > 0 &&
            listRutes.map((ruta, index) => {
              // Determinar la clase y max-h en función del índice
              const className = index < 2 ? 'col-span-3 max-h-[14rem]' : 'col-span-2 max-h-[10rem]';

              return (
                <div className={`overflow-hidden rounded-xl ${className}`} key={index}>
                  <img src={rutaString + ruta} alt='imagen encontrada' className='h-full w-full object-cover hover:scale-105 transition duration-500 ease-in-out transform' />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>

  )
}

export default ImagenEncontrada;