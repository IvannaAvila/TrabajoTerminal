// Importa React y otras dependencias necesarias
import React from 'react';
import { createRoot } from 'react-dom/client';

// Importa estilos y componentes
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crea una raíz de React utilizando la función createRoot y el elemento con el ID 'boot'
const root = createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de un componente StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Resto del código...

// Si deseas medir el rendimiento, puedes pasar una función a reportWebVitals
reportWebVitals(console.log);
