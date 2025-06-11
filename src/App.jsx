// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Inicio.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Trabajos.jsx"; // Asumiendo que Trabajos.jsx exporta 'Projects'
import Contact from "./pages/Contacto.jsx"; // Asumiendo que Contacto.jsx exporta 'Contact' y lo renombramos para claridad
import GymPage from "./laburos/Gym.jsx";
import AiresPage from "./laburos/Aires.jsx";
import DietPage from "./laburos/Dietética.jsx"


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Gym" element={<GymPage />} />
        <Route path="/Aires" element={<AiresPage />} />
        <Route path="/Dietética" element={<DietPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}