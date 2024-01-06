
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
