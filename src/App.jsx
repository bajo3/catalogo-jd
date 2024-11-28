import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogo from "./components/Catalogo";
import AutoDetails from "./components/AutoDetails";
import Home from "./components/Home";

function App() {
  const [autos, setAutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./data/autos.json")
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
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={isLoading ? <p>Cargando...</p> : <Catalogo autos={autos} />} />
        <Route path="/auto-details/:id" element={isLoading ? <p>Cargando...</p> : <AutoDetails autos={autos} />} />
      </Routes>
    </Router>
  );
}

export default App;
