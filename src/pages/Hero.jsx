import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-4 sm:px-6 text-white overflow-hidden">
      {/* Efecto de partículas/círculos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
            👋 Bienvenido a mi portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Matias Pallero
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Desarrollador Full Stack especializado en crear aplicaciones web y móviles modernas
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold 
                     flex items-center justify-center gap-2 transition-all shadow-lg 
                     shadow-cyan-500/50 hover:shadow-cyan-500/70"
          >
            Ver mis proyectos <ArrowRightIcon className="h-5 w-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 
                     px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Contáctame
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}