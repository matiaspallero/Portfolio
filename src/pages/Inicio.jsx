import React from 'react'
import Hero from './Hero.jsx';
import About from './About.jsx';
import Contact from './Contacto.jsx';
import Projects from './Trabajos.jsx'; // Importar el componente de Proyectos
import BotonFlotante from "../components/BotonFlotante.jsx";

function Inicio() {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Projects /> {/* Renderizar el componente de Proyectos */}
      <Contact />
      <BotonFlotante />
    </div>
  )
}

export default Inicio
