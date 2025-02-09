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
	  <section className="relative w-auto h-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
		<Carousel images={carouselImages} speed={5000}>
		  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/40 flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
			<div className="max-w-3xl">
			  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
				Soluciones KyJ
			  </h1>
			  <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
				Un Servicio Seguro y de Calidad
			  </p>
			</div>
		  </div>
		</Carousel>
	  </section>
  );
}
