"use client";
import { Carousel } from "@/components/Carousel/Carousel";

const carouselImages = [
  "/images/carousel/img1.png",
  "/images/carousel/img2.png",
  "/images/carousel/img3.png",
  "/images/carousel/img4.png",
  "/images/carousel/img5.png",
  "/images/carousel/img6.png",
  "/images/carousel/img7.png",
  "/images/carousel/img8.png",
  "/images/carousel/img9.png",
  "/images/carousel/img10.png",
  "/images/carousel/img11.png",
  "/images/carousel/img12.png",
  "/images/carousel/img13.png",
  "/images/carousel/img14.png",
  "/images/carousel/img15.png",
  "/images/carousel/img16.png",
  "/images/carousel/img17.png"
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
