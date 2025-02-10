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
  "/images/carousel/img13.svg",
  "/images/carousel/img14.svg",
  "/images/carousel/img15.svg",
  "/images/carousel/img16.svg",
  "/images/carousel/img17.svg",
];

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] h-auto">
      <Carousel images={carouselImages} speed={3000}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/40 flex items-center justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-xl">
              Soluciones KyJ
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 text-center max-w-3xl mx-auto leading-relaxed md:leading-loose">
              Un Servicio Seguro y de Calidad
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
