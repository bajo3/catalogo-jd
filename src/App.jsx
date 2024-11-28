import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogo from './components/Catalogo';
import AutoDetails from './components/AutoDetails';

function App() {
  const [autos, setAutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar los autos desde el archivo JSON
  useEffect(() => {
    fetch('./data/autos.json')
      .then((response) => response.json())
      .then((data) => {
        setAutos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar autos:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ruta para mostrar el catálogo de autos */}
        <Route path="/" element={isLoading ? <p>Cargando...</p> : <Catalogo autos={autos} />} />

        {/* Ruta para mostrar los detalles de un auto */}
        <Route path="/auto-details/:id" element={isLoading ? <p>Cargando...</p> : <AutoDetails autos={autos} />} />
      </Routes>
    </Router>
  );
}

export default App;
