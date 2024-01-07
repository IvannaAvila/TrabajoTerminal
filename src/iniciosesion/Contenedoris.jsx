import React from 'react';
class Contenedoris extends React.Component {
  render() {
    
    return (
        <div className="contenedor-padreis">
        <div className="contenedoris">
          <p> INICIO DE SESIÓN</p>
          <div>
          <input type="text" className="formatois" name="campo1" placeholder="CORREO ELECTRÓNICO" />
          </div>
          <div>
          <input type="text" className="formatois" name="campo2" placeholder="CONTRASEÑA" />
          </div>
          <button className="botonis">CONTINUAR</button>
        </div>
      </div>
    );
  }
}

export default Contenedoris;
