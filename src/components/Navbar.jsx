import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Los componentes Link de react-router-dom son para navegar a otras rutas/páginas.

export default function Navbar() {
  // Inicializa el estado darkMode desde localStorage o por defecto a false (modo claro)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("darkMode");
      // Devuelve true si savedMode es "true", de lo contrario false.
      // El valor por defecto es false (modo claro) si no hay nada guardado.
      return savedMode === "true"; 
    }
    return false; // Por defecto para SSR o si window no está definido
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Solo intentar acceder a localStorage si window está definido
    // y después de que el DOM se haya actualizado con la clase.
    if (typeof window !== 'undefined') {
      localStorage.setItem("darkMode", darkMode ? "true" : "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); // Usar la forma funcional es más robusto ante actualizaciones de estado asíncronas.
  };

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 scroll-smooth">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a  className="text-xl font-bold hover:text-cyan-400">
          Matias Pallero
        </a>
        <div className="flex gap-4 items-center"> {/* Ajustado gap y añadido items-center */}
          <Link to="/" className="hover:text-cyan-400">Inicio</Link>
          <a href="#projects" className="hover:text-cyan-400">Proyectos</a>
          <a href="#contact" className="hover:text-cyan-400">Contacto</a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-cyan-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}