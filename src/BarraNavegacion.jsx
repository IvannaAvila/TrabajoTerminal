import React from 'react';

class BarraNavegacion extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/" >INICIO</a></li>
          <li><a href="/acerca-de">ACERCA DE</a></li>
          <li><a href="/preguntas-y-respuestas">PREGUNTAS Y RESPUESTAS</a></li>
          <li><a href="/crear-cuenta">CREAR CUENTA</a></li>
          <li><a href="/inicio-sesion">INICIO DE SESIÓN</a></li>
        </ul>
      </nav>
    );
  }
}

export default BarraNavegacion;
