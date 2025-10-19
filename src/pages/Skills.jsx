import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "React Native", level: 85, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 88, color: "bg-teal-500" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "C#", level: 80, color: "bg-purple-500" },
    { name: "SQL", level: 78, color: "bg-orange-500" },
  ];

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white underline underline-offset-3 decoration-2 decoration-cyan-400"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}