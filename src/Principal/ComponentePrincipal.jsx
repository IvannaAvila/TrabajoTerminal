import React from 'react';
import ContenedorSuperior from '../ContenedorSuperior';
import Contenedor2 from '../Contenedor2';
import Contenedor3 from '../Contenedor3';
import TituloPrincipal from '../titulos/TituloPrincipal';
import { Link } from 'react-router-dom';


class ComponentePrincipal extends React.Component {
    render() {

        return (
            <>
                <div className='container text-black text-md font-medium'>
                    <TituloPrincipal />
                    <ContenedorSuperior />
                    <div className='pt-10 my-10 md:my-1 text-base'>
                        Ayuda:
                        <Link to="/como-subir-imagen" className="ml-1 text-center text-primary ">
                            ¿Cómo subir una imagen?
                        </Link>
                    </div>
                    {/* <div className="contenedor-inferior">
                        <Contenedor2 />
                        <Contenedor3 />
                    </div> */}
                </div>
            </>
        );
    }
}

export default ComponentePrincipal;
