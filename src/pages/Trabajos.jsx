import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const projects = [
    {
      title: "App desktop para gimnasio",
      description: "Aplicación para gestión de clientes e ingresos.",
      technologies: ["C#", "SQLite"],
      link: "/Gym",
    },
    {
      title: "Página web para dietética",
      description: "Página e-commerce para productos dietéticos.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "/Dietética",
    },
    {
      title: "App móvil para empresa de mantenimiento",
      description: "Aplicación para inventario de aires acondicionados.",
      technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL"],
      link: "/Aires",
    },
    // Más proyectos...
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/" 
          className="absolute top-8 left-8 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Volver al Inicio
        </Link>
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white pt-16 md:pt-0">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-xs">{tech}</span>
                ))}
              </div>
              <Link to={project.link} className="text-cyan-500 dark:text-cyan-400 hover:underline font-medium">Ver proyecto →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}