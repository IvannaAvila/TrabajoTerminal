import React, { useState } from 'react';
export default function Pregunta2() {
    const [abierto, setAbierto] = useState(false);

    const togglePregunta = () => {
      setAbierto(!abierto);
    };
  
    return (
      <div className='Preguntas'>
        <div onClick={togglePregunta} className="pregunta-titulo">
        • ¿Cómo sé que es la más similar a la prenda mi interés?
        </div>
        {abierto && (
          <div className="pregunta-contenido">
            El algoritmo de está página trabaja buscando la prenda más similar a la de 
            tu interés, sin duda alguna es la prenda con más coincidencia dentro de nuestro 
            catálogo
          </div>
        )}
      </div>
    );
  }
  

