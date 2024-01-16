import React from 'react';

class TituloPrincipal extends React.Component {
    render() {

        return (
            <>
                <div className="flex flex-col items-center justify-center mb-20">
                    <h1 className="text-3xl font-bold text-center text-gray-900">Buscando tu <span className='text-primary text-4xl'>Estilo</span></h1>
                    <p className="text-base text-gray-700 text-center">Selecciona una imagen de tu galería o toma una foto y nuestro procesador buscará prendas similares.</p>
                </div>
            </>
        );
    }
}

export default TituloPrincipal;
