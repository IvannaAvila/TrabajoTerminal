import React from 'react'
import Pregunta1 from './pregunta1'
import Pregunta2 from './pregunta2'
import Pregunta3 from './pregunta3'
import Pregunta from './Pregunta'

export default function ContenedorInferiorpyr() {
  return (
   <div>
      <div>
          <Pregunta1/>
          <Pregunta2/>
          <Pregunta3/>
      </div>
      <div>
        <Pregunta/>
    </div>
   </div>
  
)
}
