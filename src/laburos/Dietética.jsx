import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Datos del proyecto que quieres mostrar
const DietData = {
  title: "Página web para dietética",
  description: "Página e-commerce para productos dietéticos.",
  imageUrls: [
    "/assets/dietetica.png",
    "/assets/dietetica2.png",
    "/assets/dietetica3.png",
  ],
  technologies: ["React", "Tailwind CSS", "Node.js"],
  liveLink: "https://ejemplo.com/proximamente",
  repoLink: "https://github.com/matiaspallero/Naturalmente-tuc",
};

const DietPage = () => {
  const { title, description, imageUrls, technologies, liveLink, repoLink } =
    DietData;
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

  const goToSlide = useCallback(
    (slideIndex) => {
      setCurrentImageIndex(slideIndex);
      handleUserInteraction();
    },
    [handleUserInteraction]
  );

  const activeDotClass = "w-3 h-3 bg-cyan-500 rounded-full cursor-pointer";
  const inactiveDotClass =
    "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500";

  const canNavigate = imageUrls && imageUrls.length > 1;

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="project-detail-container relative font-sans max-w-3xl mx-auto my-5 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="absolute top-2 left-2 md:top-4 md:left-4 lg:-top-0 lg:right-full lg:left-auto lg:mr-3 
                     text-cyan-500 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-600 
                     transition-colors z-40 
                     p-2 
                     bg-white dark:bg-gray-800 lg:bg-transparent
                     rounded-full 
                     shadow-lg lg:shadow-none"
            aria-label="Volver al inicio"
          >
            <ArrowLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="project-title text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center md:text-left"
        >
          {title}
        </motion.h1>

        {imageUrls && imageUrls.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 relative select-none"
          >
            <img
              src={imageUrls[currentImageIndex]}
              alt={`Visual del proyecto ${title}`}
              className="project-image w-full h-auto object-cover rounded-md shadow-md"
              style={{ maxHeight: "auto" }}
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
          </motion.div>
        )}

        {canNavigate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center space-x-2 mt-0 mb-4"
          >
            {imageUrls.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`transition-all duration-300 ease-in-out ${
                  currentImageIndex === slideIndex
                    ? activeDotClass
                    : inactiveDotClass
                }`}
                aria-label={`Ir a la imagen ${slideIndex + 1}`}
              />
            ))}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="project-description text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
        >
          {description}
        </motion.p>

        {technologies && technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="project-technologies mt-8 mb-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Tecnologías Utilizadas:
            </h3>
            <ul className="list-disc list-inside pl-2 space-y-1">
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="project-links mt-8 flex flex-col sm:flex-row gap-4"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DietPage;