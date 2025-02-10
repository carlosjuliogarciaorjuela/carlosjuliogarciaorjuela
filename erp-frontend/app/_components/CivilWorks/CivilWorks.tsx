"use client";

import { useEffect } from "react";
import Image from "next/image";

const servicesCivilWorks = [
  "Construcción total.",
  "Mantenimientos.",
  "Remodelaciones.",
  "Diseño de planos.",
  "Muebles en madera y RH.",
  "Sistemas de cámaras.",
  "Instalación de placas.",
];

const maintenanceHydro = [
  "limpieza de trampas.",
  "Evacuación de pozos.",
  "sondeo de tuberías",
  "limpieza de pozos.",
  "Limpieza hidrosanitarias.",
  "Transporte y Certificado.",
  "Construcción cajas.",
];

const CivilWorks = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        ScrollReveal.default().reveal(".card-obras", {
          delay: 200,
          distance: "50px",
          origin: "bottom",
          duration: 800,
        });
      });
    }
  }, []);

  return (
    <section id="proyectos" className="relative py-16 px-1 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-4xl font-bold text-gray-800 text-center mb-12">
          Obras Civiles
        </div>

        {/* Container 2 cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* card 1 */}
          <div className="card-obras flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/civilworks/civilwork.svg"
                alt="Obras Civiles 1"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-full lg:w-1/2 p-2 flex flex-col justify-center">
              <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center sm:text-left font-semibold text-gray-800 mb-4">
                Infraestructura y Diseño
              </div>
              <div className="space-y-3 text-gray-700 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                {servicesCivilWorks.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-yellow-600">✔</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* cards 2 */}
          <div className="card-obras flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/civilworks/civilwork2.svg"
                alt="Obras Civiles 2"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2 flex flex-col justify-center">
              <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center sm:text-left font-semibold text-gray-800 mb-4">
                Mantenimiento Hidrosanitario
              </div>
              <div className="space-y-3 text-gray-700 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ">
                {maintenanceHydro.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-yellow-600">✔</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilWorks;
