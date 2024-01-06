// context.jsx
import { createContext, useContext, useState } from 'react';

// Creamos el contexto
const ImagenContext = createContext();

// Creamos el proveedor del contexto
export const ImagenProvider = ({ children }) => {
  const [imagenCargada, setImagenCargada] = useState({ url: null, nombre: null });

  return (
    <ImagenContext.Provider value={{ imagenCargada, setImagenCargada }}>
      {children}
    </ImagenContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
export const useImagenContext = () => {
  return useContext(ImagenContext);
};
