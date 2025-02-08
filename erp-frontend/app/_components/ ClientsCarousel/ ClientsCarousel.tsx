'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientLogos = [
  "/images/clients/cliente1.svg",
  "/images/clients/cliente2.svg",
  "/images/clients/cliente1.svg",
  "/images/clients/cliente2.svg",
  "/images/clients/cliente1.svg",
  "/images/clients/cliente2.svg",
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
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-3xl md:text-5xl font-bold text-yellow-500 mb-10">
          Nuestros Clientes
        </div>
        <Slider {...settings} className="flex items-center justify-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="p-4">
              <img src={logo} alt={`Cliente ${index + 1}`} className="mx-auto h-52 object-contain" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
