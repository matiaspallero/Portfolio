// src/components/Hero.jsx
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Hero() {

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Hola, soy <span className="text-cyan-400">Matias Pallero</span>
        </h1>
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-600 w-52 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all"
        >
          Ver mis proyectos <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}