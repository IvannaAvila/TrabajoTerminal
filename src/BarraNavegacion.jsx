import React from 'react';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

class BarraNavegacion extends React.Component {
  render() {
    return (
      <div className="w-full container mx-auto p-6">

        <div className="w-full flex items-center justify-between">
          <Link title='INICIO' to='/' className="inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4">
            <img src={logo} alt='logo' className='w-40 h-30 opacity-90 hover:opacity-100' />
          </Link>
          <div className="flex w-1/2 justify-end content-center">
            <Link title='INICIO' to='/' className="inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className='text-sm md:block hidden'>Inicio</span>
            </Link>
            <Link title='ACERCA DE' to='/acercade' className="inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <span className='text-sm md:block hidden'>Acerca de</span>
            </Link>
            <Link title='PREGUNTAS Y RESPUESTAS' to='/preguntas-y-respuestas' className="inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              <span className='text-sm md:block hidden'>Preguntas</span>
            </Link>
            <div
              className="md:block hidden inline-block h-[50px] min-h-[1em] w-0.5 self-stretch bg-red-100 opacity-100 dark:opacity-100"></div>
            <a className="md:block hidden inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
              <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
            </a>
            <a className="md:block hidden inline-block text-gray-500 no-underline hover:text-black hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 " data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
              <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
            </a>
          </div>

        </div>

      </div>
      // <nav>
      //   <ul>
      //     <li><a href="/" >INICIO</a></li>
      //     <li><a href="/acercade">ACERCA DE</a></li>
      //     <li><a href="/preguntas-y-respuestas">PREGUNTAS Y RESPUESTAS</a></li>

      //   </ul>
      // </nav>
    );
  }
}

export default BarraNavegacion;
