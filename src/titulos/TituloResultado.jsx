import React from 'react';
import { Link } from 'react-router-dom';

class TituloResultado extends React.Component {
    render() {

        return (
            <>
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className="text-3xl font-bold text-center text-gray-900">¡Tenemos<span className='text-primary text-4xl'> tu Prenda!</span></h1>
                    <p className="text-base text-gray-700 text-center">Puedes ver los resultados de tu búsqueda en la siguiente sección.</p>
                </div>
            </>
        );
    }
}

export default TituloResultado;
