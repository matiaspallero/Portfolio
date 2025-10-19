import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

function Pie() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/matiaspallero', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/matiaspallero29/', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/matiaspallero/', label: 'Instagram' },
    { icon: EnvelopeIcon, url: 'mailto:devmatiaspallero@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white" id='footer'>
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
        {/* Links sociales */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Navegación rápida */}
        <nav className="flex justify-center gap-8 mb-8 text-sm">
          <a href="#hero" className="text-gray-400 hover:text-cyan-400 transition-colors">Inicio</a>
          <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">Sobre mí</a>
          <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contacto</a>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            Diseñado y desarrollado por <span className="text-cyan-400 font-semibold">Matias Pallero</span>
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Pie;