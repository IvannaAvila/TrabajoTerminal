import React, { useState } from 'react';
export default function Pregunta3() {
    const [abierto, setAbierto] = useState(false);

    const togglePregunta = () => {
      setAbierto(!abierto);
    };
  
    return (
      <div className='Preguntas'>
        <div onClick={togglePregunta} className="pregunta-titulo">
        • ¿Cómo puedo buscar más prendas?
        </div>
        {abierto && (
          <div className="pregunta-contenido">
            En la página de inicio o la principal del lado izquierdo podrá encontrar el 
            catálogo con las prendas disponibles
          </div>
        )}
      </div>
    );
  }
  
