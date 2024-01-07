import React from 'react';
import Usuario from './Usuario';


class Contenedorcc extends React.Component {
  render() {
    
    return (
        <div className="contenedor-padrecc">
        <div className="contenedorcc">
            <p> CREAR CUENTA</p>
              <div>
                <input type="text" className="seccion1cc" name="Nombres" placeholder="NOMBRE(S)* " />
                <input type="text" className="seccion1cc" name="Paterno" placeholder="APELLIDO PATERNO *" />
                <input type="text" className="seccion1cc" name="Materno" placeholder="APELLIDO MATERNO *" />
              </div>
              <div className='s2cc'>
                <input type="text" className="seccion2cc" name="Usuario" placeholder="NOMBRE DE USUARIO *" />
                <input type="text" className="seccion2cc" name="Correo" placeholder="CONTRASEÑA *"/>
                <input type="text" className="seccion2cc" name="Contraseña" placeholder="CONTRASEÑA*" />
              </div>
              <div className='imagencc'>
                  <p>SELECCIONAR IMAGEN</p>
                  <Usuario/>
                  </div>
                <div className='usuariocc'>
                  
              </div>
              <button className="botoncc">CONTINUAR</button>
            
          </div>
      </div>
    );
  }
}

export default Contenedorcc;
