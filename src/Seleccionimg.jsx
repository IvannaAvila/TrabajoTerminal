import React, { useRef, useState } from 'react';
import { Link, Router, useNavigate } from "react-router-dom";
import { useImagenContext } from './context';
import Loader from './elements/Loader';
function Seleccionarimg() {
  const inputRef = useRef(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [mostrarBotonBuscar, setMostrarBotonBuscar] = useState(false);
  const { imagenCargada, setImagenCargada, listRutes, setListRutes } = useImagenContext();
  const [cargando, setCargando] = useState(false);
  const [img_route, set_img_route] = useState(null)
  const router = useNavigate()

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setSelectedFile(selectedFile);
      setSelectedImageName(selectedFile.name);
      setMostrarBotonBuscar(true);
      setImagenCargada(selectedFile);
    } else {
      setSelectedFile(null);
      setSelectedImageName('');
      setMostrarBotonBuscar(false);
      setImagenCargada(null);
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const buscar_imagen = () => {
    setCargando(true);
    console.log('Buscando imágen...')
    // const ruta_base = 'http://20.124.148.180:5000/'
    const ruta_base = 'https://edtech-mx-solutions.ey.r.appspot.com/'
    const ruta_base2 = 'http://127.0.0.1:5000/'
    const formData = new FormData()


    formData.append('file', imagenCargada)

    fetch(ruta_base,
      {
        method: 'POST',
        body: formData
      })
      .then(async (response) => {
        if (response.ok) {
          try {
            const data = await response.json();
            console.log(data);
            console.log('Conexión exitosa');
            set_img_route(data.img_similares);
            setListRutes(data.img_similares);
            console.log('Rutas de imágen: ' + data.img_similares);
            router('/resultado?rutaImg=' + ruta_base); // Actualiza ruta
          } catch (error) {
            console.error('Error al procesar la respuesta JSON:', error);
          }
        } else {
          console.error('Error de conexión:', response.status);
        }
        console.log(response);
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      }).finally(() => {
        setCargando(false);
      });
  }


  return (

    <>

      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
        <div className="px-4 py-6">
          <div id="image-preview" className={`max-w-sm p-6 mb-4 ${selectedFile ? 'bg-white' : 'bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg'} items-center mx-auto text-center cursor-pointer`}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={inputRef}
              onChange={handleFileInputChange}
              id="upload" className="hidden" />
            <label htmlFor="upload" className="cursor-pointer">
              {selectedFile ? (
                <img src={URL.createObjectURL(selectedFile)} className="max-h-48 rounded-lg mx-auto" alt="Image preview" />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                  <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                  <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
                  <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
                </>
              )}
            </label>
          </div>
          {
            !cargando && (
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <label className={`w-full text-white ${selectedFile ? 'bg-[#050708]' : 'bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50'} font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer`} onClick={() => document.getElementById('upload').click()}>
                    <span className="text-center ml-2">Seleccionar Foto</span>
                  </label>
                </div>
              </div>
            )}
          {
            cargando ? (
              <Loader />
            ) : (
              mostrarBotonBuscar && (
                <div className="flex items-center justify-center">
                  <div className="w-full">
                    <div onClick={buscar_imagen}>
                      <label className={`w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer`}>
                        <span className="text-center ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 inline mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                          Buscar
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Seleccionarimg;
