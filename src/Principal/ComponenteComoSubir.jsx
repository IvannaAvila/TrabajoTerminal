import React from 'react';
import ContenedorSuperior from '../ContenedorSuperior';
import Contenedor2 from '../Contenedor2';
import Contenedor3 from '../Contenedor3';
import TituloPrincipal from '../titulos/TituloPrincipal';
import { Link } from 'react-router-dom';
import TituloComoSubir from '../titulos/TituloComoSubir';


class ComponenteComoSubir extends React.Component {
    render() {

        return (
            <>
                <div className='container text-black text-md font-medium'>
                    <TituloComoSubir />
                    <div className="contenedor-inferior">
                        {/* <Contenedor2 /> */}
                        <Contenedor3 />
                    </div>
                </div>
            </>
        );
    }
}

export default ComponenteComoSubir;
