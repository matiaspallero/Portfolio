import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import LogoLoop from '../components/Loop-logos';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Logos como imágenes
  const techLogos = [
    { src: "/assets/react-original.svg", alt: "React", title: "React", href: "https://react.dev" },
    { src: "/assets/react.svg", alt: "React Native", title: "React Native", href: "https://reactnative.dev" },
    { src: "/assets/tailwind.svg", alt: "Tailwind CSS", title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { src: "/assets/node-js.svg", alt: "Node.js", title: "Node.js", href: "https://nodejs.org" },
    { src: "/assets/expo.svg", alt: "Expo", title: "Expo", href: "https://expo.dev" },
    { src: "/assets/csharp.svg", alt: "C#", title: "C#", href: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { src: "/assets/sql.svg", alt: "SQL", title: "SQL", href: "https://www.mysql.com" },
    { src: "/assets/git.svg", alt: "Git", title: "Git", href: "https://git-scm.com" },
  ];

  return (
    <section
      ref={ref}
      className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white underline underline-offset-4 decoration-2 decoration-cyan-400"
        >
          Tecnologías
        </motion.h2>

        {/* LogoLoop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={48}
            pauseOnHover={true}
            fadeOut={false}
            scaleOnHover={true}
            ariaLabel="Tecnologías que utilizo"
            className="py-8"
          />
        </motion.div>

        {/* Texto descriptivo opcional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Experiencia trabajando con tecnologías modernas para el desarrollo de aplicaciones
            web y móviles escalables, con enfoque en la experiencia del usuario y las mejores prácticas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}