// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Inicio.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Trabajos.jsx"; // Asumiendo que Trabajos.jsx exporta 'Projects'
import Contact from "./pages/Contacto.jsx"; // Asumiendo que Contacto.jsx exporta 'Contact' y lo renombramos para claridad
import GymPage from "./laburos/Gym.jsx";
import VoleyPage from "./laburos/Voley.jsx";
import DietPage from "./laburos/Dietética.jsx"
import VentasPage from "./laburos/Ventas.jsx";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Gym" element={<GymPage />} />
        <Route path="/Voley" element={<VoleyPage />} />
        <Route path="/Dietética" element={<DietPage />} />
        <Route path="/ventas" element={<VentasPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}