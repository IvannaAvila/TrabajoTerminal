import React, { useState } from 'react';

const Usuario = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Cuando la lectura del archivo esté completa, actualiza el estado con la URL de la imagen
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    }
  };

  const handleButtonClick = () => {
    // Activa el clic en el elemento de entrada de archivos al hacer clic en el botón
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleImageChange}
        accept="image/*"
      />
      <button onClick={handleButtonClick} className='perfil'>
        {selectedImage ? (
          <img src={selectedImage} alt="Imagen seleccionada" style={{ maxWidth: '100%', height: '80px', width: 'auto' }}
          />
        ) : (
          <img src="user.png" alt="Imagen predeterminada" style={{ maxWidth: '100%', height: '80px', width: 'auto' }}/>
        )}
      </button>
    </div>
  );
};

export default Usuario;
