  import './resultados.css';
  import React from 'react'
  import ImagenCargadaCaptura from './ImagenCargadaCaptura';
  import ImagenEncontradaCaptura from './ImagenEncontradaCaptura';

  function ResultadoCaptura() {
    return (
      <div className="contenedor-padre">
          <div className="contenedorderesultados">
          ¡TENEMOS TU PRENDA!
          <div className="crinferior">
             <ImagenCargadaCaptura />
              <ImagenEncontradaCaptura />
              
            </div>
          </div>
          
        </div>
    )
  }
  export default ResultadoCaptura
