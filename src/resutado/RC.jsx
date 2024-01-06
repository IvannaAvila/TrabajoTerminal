import React from 'react';
import ImagenCargadaCaptura from './ImagenCargadaCaptura';  // Importa el componente ImagenCargadaCaptura

function RC(props) {
  const { state } = props.location;

  if (!state || !state.imagenCargada) {
    // Manejar el caso en el que no hay imagen capturada
    return <div>No se capturó imagen</div>;
  }

  const imagenCargada = state.imagenCargada;

  console.log('Datos recibidos en RC:', imagenCargada);

  return (
    <div>
      <h1>Resultado de la Captura</h1>
      <ImagenCargadaCaptura imagenCargada={imagenCargada} />
      {/* Otro contenido de la pantalla de resultados */}
    </div>
  );
}

export default RC;
