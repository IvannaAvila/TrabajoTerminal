import React, { useRef, useState } from 'react';
import {Link} from "react-router-dom";
import { useImagenContext } from './context';
function Seleccionarimg() {
  const inputRef = useRef(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [mostrarBotonBuscar, setMostrarBotonBuscar] = useState(false);
  const { setImagenCargada } = useImagenContext();

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
                <Link to="/resultado" className="botonbuscar">
                  Buscar
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Seleccionarimg;
