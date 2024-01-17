import './resultados.css';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ImagenCargada from './ImagenCargada'
import ImagenEncontrada from './ImagenEncontrada'
import TituloResultado from './../titulos/TituloResultado'
import { Link } from 'react-router-dom';

function Resultado() {

  return (
    <div >
      <div className='container' >
        <TituloResultado />
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 my-10">
          <ImagenCargada />
          <ImagenEncontrada />
        </div>

      </div>

    </div>
  )
}
export default Resultado
