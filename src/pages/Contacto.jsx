import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      name: 'Github',
      username: 'matiaspallero →',
      url: 'https://github.com/matiaspallero',
      icon: FaGithub,
      color: 'hover:bg-gradient-to-br hover:from-gray-800 hover:to-black'
    },
    {
      name: 'LinkedIn',
      username: 'matiaspallero29 →',
      url: 'https://www.linkedin.com/in/matiaspallero29/',
      icon: FaLinkedin,
      color: 'hover:bg-gradient-to-br hover:bg-blue-600 hover:to-blue-800'
    },
    {
      name: 'Instagram',
      username: 'matiaspallero →',
      url: 'https://www.instagram.com/matiaspallero/',
      icon: FaInstagram,
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500'
    },
    {
      name: 'Email',
      username: 'devmatiaspallero@gmail.com →',
      url: 'mailto:devmatiaspallero@gmail.com',
      icon: EnvelopeIcon,
      color: 'hover:bg-gradient-to-br hover:bg-cyan-600 hover:to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center underline underline-offset-3 decoration-2 decoration-cyan-400"
        >
          Contacto
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5, delay: 0 }}
              whileTap={{ scale: 0.98 }}
              className={`group bg-gray-700/50 p-6 rounded-xl border border-gray-600 
                         transition-all duration-300 ${contact.color} 
                         hover:border-cyan-400`}
            >
              <div className="flex items-center gap-4">
                <contact.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{contact.name}</h3>
                  <p className="text-gray-300 text-m break-all">{contact.username}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}