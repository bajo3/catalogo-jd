import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Home.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      {/* Navegación */}
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src="../images/logo.png" alt="" /></Link>
        </div>
        <nav className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Nuestro Catálogo de Autos</h1>
          <p>Descubre los mejores autos nuevos y usados a precios increíbles.</p>
          <Link to="/catalogo" className="btn">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <h2>¿Por qué elegirnos?</h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <h3>Gran Variedad</h3>
            <p>Encuentra el auto que mejor se adapte a tus necesidades.</p>
          </div>
          <div className="benefit-card">
            <h3>Garantía</h3>
            <p>Ofrecemos autos con garantía asegurada para tu tranquilidad.</p>
          </div>
          <div className="benefit-card">
            <h3>Financiación</h3>
            <p>Facilitamos la compra con planes adaptados a tu presupuesto.</p>
          </div>
        </div>
      </section>

      {/* CTA (Llamado a la acción) */}
      <section className="cta">
        <h2>¿Listo para encontrar tu próximo auto?</h2>
        <Link to="/catalogo" className="btn">
          Ver Catálogo
        </Link>
      </section>
    </div>
  );
}

export default Home;
