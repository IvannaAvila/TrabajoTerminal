import React from 'react';


class BarraNavegacion extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/" >INICIO</a></li>
          <li><a href="/acercade">ACERCA DE</a></li>
          <li><a href="/preguntas-y-respuestas">PREGUNTAS Y RESPUESTAS</a></li>
       
        </ul>
      </nav>
    );
  }
}

export default BarraNavegacion;
