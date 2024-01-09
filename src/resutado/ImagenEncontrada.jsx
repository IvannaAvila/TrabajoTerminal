import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function ImagenEncontrada() {
  const [rutaString, setRutaString] = useState()
    const location = useLocation();

    useEffect(
      () => {
        const searchParams = new URLSearchParams(location.search);
        const rutaImg = searchParams.get('rutaImg');
        const rutaImgString = rutaImg ? JSON.stringify(rutaImg) : '';
        setRutaString(rutaImgString.substring(1,rutaImgString.length-1))
        console.log(rutaImgString)
        
      }
    )
  console.log('recibiendo imágen: '+ rutaString)
  return (
    <div className='imgencontrada'>Resultado
      <div className='muestraimagen'>
        {
          rutaString &&
          <img src= {rutaString} alt="Vestido " style={{ width: '200px', height: '300px' }} className='img' />  
        }
      </div>
    </div>
    
  )
}

export default ImagenEncontrada;