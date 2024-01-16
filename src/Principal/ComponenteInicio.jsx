import React from 'react';
import logo from '../img/logoCompleto.png';
import { Link } from 'react-router-dom';

class ComponenteInicio extends React.Component {
    render() {
        return (
            <>
                <div className="pb-14 bg-right bg-cover">
                    <div className="container pt-0 md:pt-18 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                            <h1 className="my-4 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                                Porque tú eres único. Te ayudamos a buscar tu estilo<span className='text-primary'>.</span></h1>
                            <p className="leading-normal text-base text-black md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                                Sube una imagen, <br/> ¡y nuestro procesador hará la magia!</p>
                            <Link to="/subir-imagen">
                            <p className="group text-black font-bold p-2 px-4 rounded-md mb-8 lg:mb-6 text-center md:text-left fade-in hover:bg-black transition duration-500 ease-in-out transform hover:text-white cursor-pointer">
                                Comenzar
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-8 h-8 inline pl-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </p>
                            </Link>
                        </div>
                        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                            <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={logo}/>
                        </div>
                        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                            <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; 2024. Todos los derechos reservados | ESCOM | IPN </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ComponenteInicio;
