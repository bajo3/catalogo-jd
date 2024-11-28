import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Importamos PropTypes
import { useState } from "react"; // Necesario para manejar el estado de la imagen seleccionada
import '../styles/AutoDetails.css';

function AutoDetails({ autos }) {
  const { id } = useParams(); // Obtenemos el ID del auto desde la URL
  const navigate = useNavigate(); // Para navegar de vuelta al catálogo

  // Buscamos el auto con el ID correspondiente
  const auto = autos.find((auto) => auto.id === String(id)); // Asegurarse de que el id sea del mismo tipo

  // Estado para controlar la imagen grande que se muestra
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!auto) {
    return (
      <div className="auto-details-container">
        <p className="not-found-message">Auto no encontrado</p>
        <button onClick={() => navigate("/")} className="back-button">Volver al catálogo</button>
      </div>
    );
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Cambiar la imagen grande seleccionada
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % auto.fotosAdicionales.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + auto.fotosAdicionales.length) % auto.fotosAdicionales.length
    );
  };

  return (
    <div className="auto-more-details">
      <div className="info">
      <h1>{auto.modelo} ({auto.año})</h1>
      
      {/* Contenedor de las imágenes pequeñas */}
      <div className="thumbnail-container">
        {auto.fotosAdicionales.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Foto ${index + 1}`}
            className="thumbnail-image"
            onClick={() => handleImageClick(index)} // Cambiar imagen grande al hacer clic
          />
        ))}
      </div>
      
      {/* Imagen grande seleccionada */}
      <div className="large-image-container">
        <img
          src={auto.fotosAdicionales[selectedImageIndex] || "https://via.placeholder.com/600x400?text=Sin+imagen"}
          alt={auto.modelo}
          className="large-image"
        />
        <div className="image-navigation">
          <button onClick={handlePrevImage} className="nav-button">←</button>
          <button onClick={handleNextImage} className="nav-button">→</button>
        </div>
      </div>
      </div>
<div className="info-text">
      {/* Información adicional del auto */}
      <p>Motor: {auto.especificaciones.motor}</p>
      <p>Combustible: {auto.especificaciones.combustible}</p>
      <p>Kilometraje: {auto.especificaciones.kilometraje} km</p>
      <p>Transmisión: {auto.especificaciones.transmision}</p>
      <p>Teléfono: {auto.contacto.telefono}</p>
      <p>Email: <a href={`mailto:${auto.contacto.email}`} className="email-link">{auto.contacto.email}</a></p>
      <button onClick={() => navigate("/")} className="back-button">Volver al catálogo</button>
    </div>
    </div>
  );
}

// Validación de los props
AutoDetails.propTypes = {
  autos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      año: PropTypes.number.isRequired,
      fotosAdicionales: PropTypes.arrayOf(PropTypes.string).isRequired,
      especificaciones: PropTypes.shape({
        motor: PropTypes.string.isRequired,
        combustible: PropTypes.string.isRequired,
        kilometraje: PropTypes.number.isRequired,
        transmision: PropTypes.string.isRequired,
      }).isRequired,
      contacto: PropTypes.shape({
        telefono: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default AutoDetails;
