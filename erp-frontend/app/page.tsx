import { Carousel } from '@/components/Carousel/Carousel';
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import ClientsCarousel from "@/components/ ClientsCarousel/ ClientsCarousel";
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
                  <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/40 flex items-center justify-center text-center px-6">
                      <div className="max-w-3xl">
                          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                              Soluciones KyJ
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
                      Bienvenido a <strong>K&J SOLUCIONES Y ASESORÍAS.</strong>Somos una empresa 100%
                      Ibaguereña, dedicada a brindar soluciones en mantenimiento, instalación
                      y mantenimientos industriales.
                  </p>
                  <div className="mt-10">
                      <a
                          href="/sobre-nosotros"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
                      >
                          Contactar
                      </a>
                  </div>
              </div>
          </section>
          <section className="w-full bg-white py-20 px-6 md:px-12">
              <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Misión */}
                      <div className="text-center">
                          <h3 className="text-3xl font-semibold text-yellow-500 mb-4 ">
                              Misión
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                              Nuestra razón de ser es dar respuesta a los requerimientos de
                              servicios de mantenimiento, construcción y asesoría, de manera
                              oportuna y eficiente para nuestros clientes, ofreciendo servicios
                              de calidad, innovadores, seguros y respetuosos con el medio
                              ambiente. A su vez, nuestra empresa se compromete a brindar
                              capital humano la posibilidad de cumplir sus expectativas
                              profesionales y de desarrollo personal y generar rentabilidad.
                          </p>
                      </div>

                      {/* Visión */}
                      <div
                          className="text-center border-t md:border-t-0 md:border-l border-gray-300 md:pl-12 pt-6 md:pt-0">
                          <h3 className="text-3xl font-semibold text-yellow-500 mb-4">
                              Visión
                          </h3>
                          <p className="text-lg text-gray-700 leading-relaxed">
                              Nuestra visión es ser la empresa líder en el mercado nacional,
                              capaz de resolver necesidades de mantenimiento, construcción y
                              asesoría, reconocida por ofrecer servicios que satisfacen
                              íntegramente las expectativas de sus clientes, basándose en
                              altos estándares de calidad, seguridad y cuidado del medio
                              ambiente. Nuestra organización aspira a tener un crecimiento
                              continuo y sustentable, destacándose por ser una empresa que
                              contribuye positivamente a la sociedad.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
          {/* Seccion de nuetros valores */}
          <ValuesSection />
          {/* Seccion de nuestros clientes*/}
          <ClientsCarousel />

          
      </>
  );
}
