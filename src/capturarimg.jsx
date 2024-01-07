
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
    <div className='tomarfoto'>
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
    </div>
  );
}

export default CapturaImg;
