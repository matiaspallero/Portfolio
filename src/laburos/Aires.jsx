import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

// Datos del proyecto que quieres mostrar
const AiresData = {
  title: "App móvil para empresa de mantenimiento",
  description: "Aplicación para inventario de aires acondicionados.",
  imageUrls: [
    "https://via.placeholder.com/800x450.png?text=Aires+Vista+1", // Reemplaza con tus imágenes
    "https://via.placeholder.com/800x450.png?text=Aires+Vista+2",
    "https://via.placeholder.com/800x450.png?text=Aires+Vista+3"
  ],
  technologies: ["React Native", "Tailwind CSS", "Node.js", "MySQL"],
  liveLink: "https://ejemplo.com/proximamente", // Opcional: Enlace a la demo en vivo
  repoLink: "https://github.com/matiaspallero/InstalarApp" // Opcional: Enlace al repositorio
};

const AiresPage = () => {
  const { title, description, imageUrls, technologies, liveLink, repoLink } = AiresData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const autoPlayIntervalRef = useRef(null);
  const resumeAutoPlayTimeoutRef = useRef(null);
  const AUTO_PLAY_DELAY = 3000; 
  const USER_INTERACTION_RESUME_DELAY = 7000;

  const resetAutoPlayTimers = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    if (resumeAutoPlayTimeoutRef.current) {
      clearTimeout(resumeAutoPlayTimeoutRef.current);
      resumeAutoPlayTimeoutRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    resetAutoPlayTimers();
    if (imageUrls.length <= 1) return;

    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_DELAY);
  }, [imageUrls.length, resetAutoPlayTimers, AUTO_PLAY_DELAY]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      resetAutoPlayTimers();
    };
  }, [startAutoPlay]);

  const handleUserInteraction = useCallback(() => {
    resetAutoPlayTimers();
    resumeAutoPlayTimeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, USER_INTERACTION_RESUME_DELAY);
  }, [resetAutoPlayTimers, startAutoPlay, USER_INTERACTION_RESUME_DELAY]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
    handleUserInteraction();
  }, [imageUrls.length, handleUserInteraction]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
    handleUserInteraction();
  }, [imageUrls.length, handleUserInteraction]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentImageIndex(slideIndex);
    handleUserInteraction();
  }, [handleUserInteraction]);

  const activeDotClass = "w-3 h-3 bg-cyan-500 rounded-full cursor-pointer";
  const inactiveDotClass = "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500";
  
  const canNavigate = imageUrls && imageUrls.length > 1;

  return (
    <section className='py-16 px-6 bg-gray-50 dark:bg-gray-900'> {/* La sección ya tiene su propio padding */}
    <div className="project-detail-container relative font-sans max-w-3xl mx-auto my-5 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
      <Link 
        to="/" 
        className="absolute top-6 right-full mr-3 sm:mr-4 text-cyan-500 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-600 transition-colors z-index" 
        aria-label="Volver al inicio"
      >
          <ArrowLeftIcon className="h-8 w-8" />
      </Link>
      <h1 className="project-title text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center md:text-left">{title}</h1>
      {imageUrls && imageUrls.length > 0 && (
        <div 
          className="mb-6 relative select-none"
        >
          <img 
            src={imageUrls[currentImageIndex]}
            alt={`Visual del proyecto ${title}`} 
            className="project-image w-full h-auto object-cover rounded-md shadow-md"
            style={{ maxHeight: '450px' }} // Controla la altura máxima si es necesario
            draggable="false" 
          />
          {canNavigate && (
            <>
              <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 left-1 md:left-2 transform -translate-y-1/2 text-white dark:text-black p-2 rounded-full hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
              </button>
              <button 
                onClick={goToNext} 
                className="absolute top-1/2 right-1 md:right-2 transform -translate-y-1/2 text-white dark:text-black p-2 rounded-full hover:bg-black hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-20 transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </>
          )}
        </div>
      )}
      {canNavigate && (
        <div className="flex justify-center space-x-2 mt-0 mb-4">
          {imageUrls.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all duration-300 ease-in-out ${currentImageIndex === slideIndex ? activeDotClass : inactiveDotClass}`}
              aria-label={`Ir a la imagen ${slideIndex + 1}`}
            />
          ))}
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
    </section>
  );
};

export default AiresPage;