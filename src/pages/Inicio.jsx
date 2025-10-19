import React from 'react'
import Hero from './Hero.jsx';
import About from './About.jsx';
import Contact from './Contacto.jsx';
import Projects from './Trabajos.jsx';
import BotonFlotante from "../components/BotonFlotante.jsx";
import Pie from "./Footer.jsx";
import Skills from './Skills.jsx';

function Inicio() {
  return (
    <div id='home' className="w-full min-h-screen overflow-x-hidden">
      <div className='w-full'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Pie />
      </div>
      <BotonFlotante />
    </div>
  )
}

export default Inicio