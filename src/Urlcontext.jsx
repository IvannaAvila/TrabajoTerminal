// URLcontext.jsx
import { createContext, useContext, useState } from 'react';

// Creamos el contexto
const URLContext = createContext();

// Creamos el proveedor del contexto
export const URLProvider = ({ children }) => {
    const [URLCargada, setURLCargada] = useState({ url: null, nombre: null });

  return (
    <URLContext.Provider value={{ URLCargada, setURLCargada }}>
      {children}
    </URLContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
export const useURLContext = () => {
  return useContext(URLContext);
};
