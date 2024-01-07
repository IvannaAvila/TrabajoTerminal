import { createContext, useContext, useState } from 'react';

const ContextCaptura = createContext();

export const CapturaProvider = ({ children }) => {
  const [imagenCapturada, setImagenCapturada] = useState({url:null, nombre: null});

  return (
    <ContextCaptura.Provider value={{ imagenCapturada, setImagenCapturada }}>
      {children}
    </ContextCaptura.Provider>
  );
};

export const useContextCaptura = () => {
  return useContext(ContextCaptura);
};