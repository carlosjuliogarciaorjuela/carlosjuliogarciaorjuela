import { Carousel } from '@/components/Carousel/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HomePage() {
  const carouselImages = [
      '/images/carousel/img1.svg',
      '/images/carousel/img2.svg',
      '/images/carousel/img3.svg',
      '/images/carousel/img4.svg',
      '/images/carousel/img5.svg',
      '/images/carousel/img6.svg',
      '/images/carousel/img7.svg',
      '/images/carousel/img8.svg',
      '/images/carousel/img9.svg',
      '/images/carousel/img10.svg',
      '/images/carousel/img11.svg',
      '/images/carousel/img12.svg',

  ];

  return (
    <>
         {/* Hero Section con Carousel */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <Carousel images={carouselImages} speed={5000}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/40 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Soluciones S.A.S KyJ
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
                Un Servicio Seguro y de Calidad
              </p>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Sección - Nuestra Empresa */}
      <section className="w-full py-24 bg-gray-100 flex items-center justify-center">
        <div className="max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Nuestra Empresa
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            En <strong>Soluciones S.A.S KyJ</strong>, nos especializamos en la construcción de obras civiles,
            brindando soluciones innovadoras y de alta calidad en cada proyecto. Nos enfocamos en la seguridad,
            eficiencia y excelencia, garantizando satisfacción en cada obra que realizamos.
          </p>
          <div className="mt-10">
            <a
              href="/sobre-nosotros"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
            >
              Conócenos Más
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
