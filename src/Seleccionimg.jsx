import React, { useRef, useState } from 'react';
import {Link, Router,useNavigate} from "react-router-dom";
import { useImagenContext } from './context';
function Seleccionarimg() {
  const inputRef = useRef(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [mostrarBotonBuscar, setMostrarBotonBuscar] = useState(false);
  const { imagenCargada, setImagenCargada } = useImagenContext();
  const [img_route, set_img_route] = useState(null)
  const router = useNavigate()
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setSelectedImageName(selectedFile.name);
      setMostrarBotonBuscar(true);
      setImagenCargada(selectedFile);
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const buscar_imagen = () => {
    console.log('Buscando imágen...')
    const ruta_base = 'http://20.241.183.28:5000/'
    const ruta_base2 = 'http://127.0.0.1:5000/'
    const formData = new FormData()

    formData.append('file', imagenCargada)

    //checar ejemplo de fetch con post y cargar imágen
    fetch(ruta_base2, 
      {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        //   'Content-Length': '<calculated when request is sent>'
        // },
        body: formData
      })
  .then(async (response) => {
    if (response.ok) {
      try {
        const data = await response.json();
        console.log(data);
        console.log('Conexión exitosa');
        set_img_route(data.img_similar);
        router('/resultado?rutaImg=' + data.img_similar); // Actualiza ruta
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
  });

  }


  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileInputChange}
      />
      <div className="contenedorSuperior">
        <button onClick={handleButtonClick} className="busqueda">
          Seleccionar imagen:
        </button>
        <div className="contbusqueda">
          {selectedImageName && (
            <div className="lado">
              <p>{selectedImageName}</p>
              {mostrarBotonBuscar && (
                <button onClick={buscar_imagen} className="botonbuscar">
                  Buscar
                </button>
                
                // <Link to="/resultado" className="botonbuscar">
                //   Buscar
                // </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Seleccionarimg;
