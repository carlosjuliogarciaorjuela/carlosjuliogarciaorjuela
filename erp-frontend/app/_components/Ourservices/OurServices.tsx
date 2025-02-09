"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {
  FaBuilding, FaHammer, FaPaintRoller, FaShield, FaPalette,
  FaHouseChimney, FaLightbulb, FaShuffle, FaWind, FaCamera,
  FaSnowflake, FaIndustry
} from "react-icons/fa6";

const services = [
  { icon: <FaBuilding />, titulo: "Restauración de fachadas", descripcion: "Mejoramos la apariencia y estructura de oficinas y plantas industriales." },
  { icon: <FaHammer />, titulo: "Obras civiles", descripcion: "Construcción y remodelación de infraestructuras con altos estándares." },
  { icon: <FaPaintRoller />, titulo: "Pintura y lavado de muros", descripcion: "Servicios de pintura profesional y limpieza profunda de superficies." },
  { icon: <FaShield />, titulo: "Impermeabilización", descripcion: "Protegemos estructuras contra filtraciones y humedad." },
  { icon: <FaPalette />, titulo: "Pintura industrial", descripcion: "Aplicamos recubrimientos especiales para resistencia y durabilidad." },
  { icon: <FaHouseChimney />, titulo: "Instalación de cubiertas", descripcion: "Montaje y mantenimiento de techos en diferentes materiales." },
  { icon: <FaLightbulb />, titulo: "Publicidad y señalización", descripcion: "Fabricamos e instalamos señalización en acrílico y otros materiales." },
  { icon: <FaShuffle />, titulo: "Limpieza de tuberías", descripcion: "Eliminamos residuos y mantenemos trampas de grasa operativas." },
  { icon: <FaWind />, titulo: "Mantenimiento de aires acondicionados", descripcion: "Servicio técnico para garantizar el óptimo rendimiento de tus equipos." },
  { icon: <FaCamera />, titulo: "Sistemas de seguridad", descripcion: "Instalamos cámaras y sistemas de automatización de seguridad." },
  { icon: <FaSnowflake />, titulo: "Cuartos fríos", descripcion: "Instalación y mantenimiento de sistemas de refrigeración industrial." },
  { icon: <FaIndustry />, titulo: "Estructuras metálicas", descripcion: "Diseño, fabricación e instalación de estructuras en acero y aluminio." }
];

const OurServices = () => {
  useEffect(() => {
	ScrollReveal().reveal(".servicio", {
	  delay: 200,
	  distance: "50px",
	  origin: "bottom",
	  duration: 800,
	});
  }, []);

  return (
	  <section className="py-20 bg-yellow-100 text-center">
		<div className="text-4xl font-bold text-black mb-10">
		  Nuestros Servicios
		</div>

		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
		  {services.map((servicio, index) => (
			  <div
				  key={index}
				  className="servicio bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2 hover:shadow-lg"
			  >
				<div className="text-blue- text-4xl mb-4">{servicio.icon}</div>
				<div className="text-xl font-semibold text-gray-800">{servicio.titulo}</div>
				<div className="text-gray-600 mt-2">{servicio.descripcion}</div>
			  </div>
		  ))}
		</div>
	  </section>
  );
};

export default OurServices;
