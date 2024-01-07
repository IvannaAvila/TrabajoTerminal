import React, { useState } from 'react';
export default function Pregunta1() {
    const [abierto, setAbierto] = useState(false);

    const togglePregunta = () => {
      setAbierto(!abierto);
    };
  
    return (
      <div className='Preguntas'>
        <div onClick={togglePregunta} className="pregunta-titulo">
        • ¿Cómo busco la prenda de ropa que me interesa?
        </div>
        {abierto && (
          <div className="pregunta-contenido">
            Desde la página de inicio del sitio web aparecerá un icóno con forma de cámara
            fotográfica, al seleccionarlo se abrirá un menú de búsqueda para fotos en su 
            dispositivo, seleccionar la imágen con una prenda que abarque más del 70% de la
            foto y seleccione "buscar"
          </div>
        )}
      </div>
    );
  }
  



 