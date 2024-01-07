  import './resultados.css';
  import React from 'react'
  import ImagenCargada from './ImagenCargada'
  import ImagenEncontrada from './ImagenEncontrada'

  function Resultado() {
    return (
      <div className="contenedor-padre">
          <div className="contenedorderesultados">
          ¡TENEMOS TU PRENDA!
          <div className="crinferior">
              <ImagenCargada />
              <ImagenEncontrada />
            </div>
          </div>
          
        </div>
    )
  }
  export default Resultado
