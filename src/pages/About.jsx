import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='about' ref={ref} className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center underline decoration-2 underline-offset-3 decoration-cyan-400 text-gray-800 dark:text-white"
        >
          Sobre Mí
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-[20rem] h-[20rem] sm:w-[25rem] sm:h-[25rem] rounded-full flex justify-center items-center flex-shrink-0">
              <img 
                src="/assets/Yo.jpg" 
                alt="Matias Pallero" 
                className="w-[90%] h-[90%] rounded-full border-2 border-[#00abf0] object-cover"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-y-white dark:border-y-gray-800 border-x-[#00abf0] dark:border-x-[#00abf0] animate-spin duration-[20s] transition-none"></span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-4">
              Tengo 26 años y me especializo en construir aplicaciones web y móviles con tecnologías modernas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-6">
              Mi stack principal incluye <span className="font-semibold">React, React Native, Tailwind CSS, Node.js, Expo, C# y SQL</span>, 
              pero siempre estoy aprendiendo nuevas herramientas.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { name: "React", imgSrc: "/assets/react.svg" },
                { name: "Tailwind CSS", imgSrc: "/assets/tailwind.svg" },
                { name: "Node.js", imgSrc: "/assets/node-js.svg" },
                { name: "React Native", imgSrc: "/assets/react.svg" },
                { name: "Expo", imgSrc: "/assets/expo.svg" }, 
                { name: "C#", imgSrc: "/assets/csharp.svg" },
                { name: "SQL", imgSrc: "/assets/sql.svg" },
              ].map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  <img 
                    src={tech.imgSrc} 
                    alt={`${tech.name} logo`} 
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}