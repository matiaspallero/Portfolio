import React from 'react';

// Datos del proyecto que quieres mostrar
const GymData = {
  title: "Aplicación de Gestión de Gimnasio",
  description: "Desarrollé una aplicación de escritorio para la gestión de un gimnasio. Permite a los administradores registrar miembros, gestionar membresías, horarios, pagos. El objetivo principal fue modernizar y optimizar las operaciones diarias del gimnasio.",
  imageUrl: "https://via.placeholder.com/800x450.png?text=App+Gimnasio+UI", // Reemplaza con la URL o ruta local de tu imagen
  technologies: ["C#", "SQLite"],
  liveLink: "https://ejemplo.com/gym-app-demo", // Opcional: Enlace a la demo en vivo
  repoLink: "https://github.com/tu-usuario/gym-app-repo" // Opcional: Enlace al repositorio
};

const GymPage = () => {
  const { title, description, imageUrl, technologies, liveLink, repoLink } = GymData;

  return (
    <div className="project-detail-container font-sans max-w-3xl mx-auto my-5 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
      <h1 className="project-title text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center md:text-left">{title}</h1>
      {imageUrl && (
        <div className="mb-6">
          <img 
            src={imageUrl} 
            alt={`Visual del proyecto ${title}`} 
            className="project-image w-full h-auto object-cover rounded-md shadow-md"
            style={{ maxHeight: '450px' }} // Controla la altura máxima si es necesario
          />
        </div>
      )}
      <p className="project-description text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="project-technologies mt-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Tecnologías Utilizadas:</h3>
          <ul className="list-disc list-inside pl-2 space-y-1">
            {technologies.map((tech, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-400">{tech}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="project-links mt-8 flex flex-col sm:flex-row gap-4">
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center no-underline py-3 px-6 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-300 ease-in-out shadow hover:shadow-lg"
          >
            Ver Demo
          </a>
        )}
        {repoLink && (
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center no-underline py-3 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out shadow hover:shadow-lg"
          >
            Ver Repositorio
          </a>
        )}
      </div>
    </div>
  );
};

export default GymPage;