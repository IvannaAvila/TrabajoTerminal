
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useURLContext } from './Urlcontext';

function CapturaImg() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [camaraIniciada, setCamaraIniciada] = useState(false);
  const [imagenCapturada, setImagenCapturada] = useState(null);
  const { setURLCargada } = useURLContext();

  const iniciarCamara = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setCamaraIniciada(true);
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  };

  const detenerCamara = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setCamaraIniciada(false);
  };

  const tomarFoto = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    if (canvasRef.current && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

      // Obtener la URL de datos de la imagen capturada
      const urlImagen = canvas.toDataURL('image/png');
      console.log(urlImagen);

      // Almacenar la imagen en el contexto y en el estado local
      setURLCargada(urlImagen);
      setImagenCapturada(urlImagen);
      console.log(setImagenCapturada);

      // Mostrar la imagen después de tomar la foto
      mostrarImagen(urlImagen);
    }
  };

  const handleTomarFoto = () => {
    tomarFoto();
  };

  const handleDetenerCamara = () => {
    detenerCamara();
  };

  const handleBuscar = () => {
    // Lógica para buscar la imagen
    console.log('Buscar imagen:', imagenCapturada);
    // Puedes redirigir a la página de resultados o realizar la lógica de búsqueda aquí
  };

  const mostrarImagen = (urlImagen) => {
    // Puedes hacer lo necesario para mostrar la imagen aquí
    console.log('Mostrar imagen:', urlImagen);
    // También puedes usar esta función para actualizar el estado o realizar otras operaciones
  };

  // const buscar_imagen = () => {
  //   console.log('Buscando imágen...')
  //   const ruta_base = 'http://20.241.183.28:5000/'
  //   const ruta_base2 = 'http://127.0.0.1:5000/'
  //   const formData = new FormData()

  //   formData.append('file', imagenCargada)

  //   //checar ejemplo de fetch con post y cargar imágen
  //   fetch(ruta_base2, 
  //     {
  //       method: 'POST',
  //       // headers: {
  //       //   'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
  //       //   'Content-Length': '<calculated when request is sent>'
  //       // },
  //       body: formData
  //     })
  // .then(async (response) => {
  //   if (response.ok) {
  //     try {
  //       const data = await response.json();
  //       console.log(data);
  //       console.log('Conexión exitosa');
  //       set_img_route(data.img_similar);
  //       router('/resultado?rutaImg=' + data.img_similar); // Actualiza ruta
  //     } catch (error) {
  //       console.error('Error al procesar la respuesta JSON:', error);
  //     }
  //   } else {
  //     console.error('Error de conexión:', response.status);
  //   }
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.error('Error en la solicitud:', error);
  // });

  // }

  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
        <div className="px-4 py-6">
          <div id="image-preview" className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
            <label for="upload" className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Captura de Imagen</h5>
              <p className="font-normal text-sm text-gray-600 md:px-6">
                Se solicitarán permisos si el dispositivo cuenta con cámara
              </p>
              <span id="filename" className="text-gray-500 bg-gray-200 z-50"></span>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full">
              <label className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                <span className="text-center ml-2">Siguiente</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='tomarfoto'>
      <div className='botoncam'>
        {camaraIniciada ? (
          <>
            <button onClick={handleTomarFoto} className='botoncam'>
              Tomar foto
            </button>
            <button onClick={handleDetenerCamara} className='botoncam'>
              Detener cámara
            </button>
          </>
        ) : (
          <>
            <button onClick={iniciarCamara} className='botoncam'>
            <img src="busca.png" alt="Iniciar cámara" />
            </button>
            {imagenCapturada && (
              <Link to="/resultadocaptura" className="botonbuscar" onClick={handleBuscar}>
                Buscar
              </Link>
            )}
          </>
        )}
      </div>
      {imagenCapturada && (
        <div className='imagencapturada'>
          <img
            src={imagenCapturada}
            alt='Imagen capturada'
            className='result'
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      )}
      <video ref={videoRef} style={{ display: 'none' }} autoPlay />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div> */}
    </>
  );
}

export default CapturaImg;
