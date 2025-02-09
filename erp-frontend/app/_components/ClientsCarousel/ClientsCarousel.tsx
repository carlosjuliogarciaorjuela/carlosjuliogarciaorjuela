// components/ClientsCarousel.tsx
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const clientLogos = [
  "/images/clients/cliente1.svg",
  "/images/clients/cliente2.svg",
  "/images/clients/cliente3.svg",
  "/images/clients/cliente1.svg",
  "/images/clients/cliente2.svg",
  "/images/clients/cliente3.svg",
];

export default function ClientsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {" "}
        {/* Ancho máximo del contenedor */}
        <div className="text-3xl md:text-5xl font-bold text-yellow-500 mb-10">
          Nuestros Clientes
        </div>
        <div className="mx-auto">
          {" "}
          {/* Centra el carrusel */}
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="p-4">
                <Image
                  src={logo}
                  alt={`Cliente ${index + 1}`}
                  width={200} // Ancho fijo
                  height={200} // Altura fija
                  className="mx-auto object-contain" // Ajusta object-contain/cover/fill según tus necesidades
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
