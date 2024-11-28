import { Link } from "react-router-dom";
import PropTypes from "prop-types";  // Importamos PropTypes
import '../styles/Catalogo.css'

function Catalogo({ autos }) {
  console.log(autos); // Asegúrate de que los tres autos estén en el array
  return (
    <div>
      <h1>Catálogo de Autos</h1>
      <div className="catalogo">
        {autos.map((auto) => (
          <div key={auto.id} className="auto-card">
            <img src={auto.fotosAdicionales[0]} alt={auto.modelo} />
            <h2>{auto.modelo}</h2>
            <p>{auto.año}</p>
            <Link to={`/auto-details/${auto.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}


// Validación de los props con PropTypes
Catalogo.propTypes = {
  autos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      año: PropTypes.number.isRequired,
      fotosAdicionales: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Catalogo;
