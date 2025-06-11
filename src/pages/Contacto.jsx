export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <textarea placeholder="Mensaje" rows="5" className="w-full px-4 py-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold w-full transition-all">
            Enviar Mensaje
          </button>
        </form>
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com/matiaspallero" className="hover:text-cyan-400 transform-all hover:scale-110 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/matiaspallero29" className="hover:text-cyan-400 transform-all hover:scale-110 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}