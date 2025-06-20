export default function About() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Contenedor para layout responsivo y centrado del bloque de imagen */}
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Contenedor .about-img */}
            <div className="relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center flex-shrink-0">
              {/* Imagen .about-img img */}
              <img 
                src="/assets/Yo.jpg" 
                alt="Matias Pallero" 
                className="w-[90%] h-[90%] rounded-full border-2 border-[#00abf0] object-cover"
              />
              {/* Elemento .circle-spin para el borde animado */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-y-white dark:border-y-gray-800 border-x-[#00abf0] dark:border-x-[#00abf0] animate-spin duration-[20s] transition-none"></span>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 dark:text-gray-300 text-xl mb-4"> {/* Ajustado text-gray-800 a text-gray-700 para consistencia si se desea, o mantener text-gray-800 */}
              Tengo 25 años y me especializo en construir aplicaciones web y móviles con tecnologías modernas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-xl mb-6"> {/* Ajustado text-gray-800 a text-gray-700 para consistencia si se desea, o mantener text-gray-800 */}
              Mi stack principal incluye <span className="font-semibold">React, Tailwind CSS, Node.js y MySQL</span>, 
              pero siempre estoy aprendiendo nuevas herramientas.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "React", imgSrc: "/assets/react.svg" },
                { name: "Tailwind CSS", imgSrc: "/assets/tailwind.svg" },
                { name: "Node.js", imgSrc: "/assets/node-js.svg" },
                { name: "MySQL", imgSrc: "/assets/mysql.svg" },
                { name: "React Native", imgSrc: "/assets/react.svg" }, // Asumiendo que usas el mismo ícono de React para React Native
              ].map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <img 
                    src={tech.imgSrc} 
                    alt={`${tech.name} logo`} 
                    className="w-5 h-5 mr-2" // Ajusta el tamaño y margen según necesites
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}