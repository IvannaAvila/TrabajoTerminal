// App.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde "react-dom/client"
import { ImagenProvider } from './context';
import { URLProvider } from './Urlcontext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './contenedores.css';
import BarraNavegacion from './BarraNavegacion';
import Contenedor from './Contenedor';
import Resultado from './resutado/resultado';
import ResultadoCaptura from './resutado/resultadocaptura';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

function App() {
  return (
    <div className="App">
 <URLProvider>
      <ImagenProvider>
       
        <BrowserRouter>
          <BarraNavegacion />
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Contenedor />} />
              <Route path="/resultado" element={<Resultado/>} />
              <Route path="/resultadocaptura" element={<ResultadoCaptura/>} />
            </Routes>
          </header>
        </BrowserRouter>
       
      </ImagenProvider>
      </URLProvider>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;