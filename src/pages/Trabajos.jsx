import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const projects = [
    {
      title: "App desktop para gimnasio",
      description: "Aplicación para gestión de clientes e ingresos.",
      technologies: ["C#", ".NET Framework", "SQLite"],
      link: "/Gym",
      icon: "💪",
    },
    {
      title: "Página web para dietética",
      description: "Página e-commerce para productos dietéticos.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "/Dietética",
      icon: "🥗",
    },
    {
      title: "Scoreboard para vóley",
      description: "Aplicación para gestión de puntajes de partidos de vóley.",
      technologies: ["React Native", "Tailwind CSS", "Expo", "SQLite"],
      link: "/Voley",
      icon: "🏐",
    },
    {
      title: "App desktop para negocio de ventas",
      description: "Aplicación para gestión de ventas y clientes.",
      technologies: ["C#", ".NET Framework", "SQLite"],
      link: "/Ventas",
      icon: "🛒",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white pt-16 md:pt-0 underline underline-offset-3 decoration-2 decoration-cyan-400"
        >
          Proyectos
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link
                to={project.link}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl 
                         border-2 border-gray-200 dark:border-gray-700 
                         hover:border-cyan-400 dark:hover:border-cyan-400
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                         before:absolute before:inset-0 before:rounded-2xl 
                         before:bg-gradient-to-br before:from-cyan-400/0 before:to-cyan-400/0
                         before:hover:from-cyan-400/5 before:hover:to-purple-400/5
                         before:transition-all before:duration-300
                         block h-full"
              >
                <div className="relative h-full flex flex-col">
                  <div className="text-5xl mb-4">{project.icon}</div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 
                                px-3 py-1 rounded-full text-xs font-medium
                                group-hover:bg-cyan-100 group-hover:text-cyan-700
                                dark:group-hover:bg-cyan-900 dark:group-hover:text-cyan-300
                                transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-500 dark:text-cyan-400 font-semibold mt-auto">
                    Ver proyecto
                    <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}