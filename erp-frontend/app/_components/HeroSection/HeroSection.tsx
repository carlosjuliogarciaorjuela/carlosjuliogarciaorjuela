"use client";
import { Carousel } from "@/components/Carousel/Carousel";

const carouselImages = [
  "/images/carousel/img1.svg",
  "/images/carousel/img2.svg",
  "/images/carousel/img3.svg",
  "/images/carousel/img4.svg",
  "/images/carousel/img5.svg",
  "/images/carousel/img6.svg",
  "/images/carousel/img7.svg",
  "/images/carousel/img8.svg",
  "/images/carousel/img9.svg",
  "/images/carousel/img10.svg",
  "/images/carousel/img11.svg",
  "/images/carousel/img12.svg",
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-auto flex items-center justify-center overflow-hidden">
      <Carousel images={carouselImages} speed={5000}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/40 flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Soluciones KyJ
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
              Un Servicio Seguro y de Calidad
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
