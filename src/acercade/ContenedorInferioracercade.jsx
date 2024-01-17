import React from 'react'
import ContenedorSuperioracercade from './ContenedorSuperioracercade'

export default function ContenedorInferioracercade() {
    return (
        <div className='mx-auto px-10'>
            <div className='text-base md:text-2xl text-black'>
                <ContenedorSuperioracercade />
                <p className='pt-10'>Estudiantes pertenecientes al <span className='text-primary mr-1'>Instituto Politécnico Nacional</span>
                    que imparten un proyecto basándose en el reconocimiento de
                    Patrones y el procesamiento Digital de imágenes para el desarrollo
                    de una herramienta digital que aplica un algoritmo de búsqueda para
                    la obtención de información de ropa para dama selecta a través de
                    una imagen que el usuario pueda proporcionar a nuestra página.</p>
            </div>
        </div>
    )

}
