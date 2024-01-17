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
import Acercade from './acercade/acercade';
import PyR from './pyr/PyR';
import ComponenteInicio from './Principal/ComponenteInicio';
import ComponentePrincipal from './Principal/ComponentePrincipal';
import ComponenteComoSubir from './Principal/ComponenteComoSubir';
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

function App() {
  return (
    <div className="App">
 <URLProvider>
      <ImagenProvider>
        <BrowserRouter>
          <BarraNavegacion />
          <header >
            <Routes>
              <Route path="/" element={<ComponenteInicio />} />
              <Route path="/subir-imagen" element={<ComponentePrincipal/>} />
              <Route path="/como-subir-imagen" element={<ComponenteComoSubir/>} />
              <Route path="/resultado" element={<Resultado/>} />
              <Route path="/resultadocaptura" element={<ResultadoCaptura/>} />
              <Route path="/acercade" element={<Acercade/>}/>
              <Route path="/preguntas-y-respuestas" element={<PyR/>}/>
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
