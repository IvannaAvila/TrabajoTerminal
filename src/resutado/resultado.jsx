  import './resultados.css';
  import React, { useEffect, useLayoutEffect, useState } from 'react'
  import ImagenCargada from './ImagenCargada'
  import ImagenEncontrada from './ImagenEncontrada'
  

  function Resultado() {
    


    // const img_route = router.get('rutaImg')
    // if () {
      
    // }

    return (
      <div className="contenedor-padre">
          <div className="contenedorderesultados">
          ¡TENEMOS TU PRENDA!
          <div className="crinferior">
              <ImagenCargada />
              <ImagenEncontrada/>
            </div>
          </div>
          
        </div>
    )
  }
  export default Resultado
