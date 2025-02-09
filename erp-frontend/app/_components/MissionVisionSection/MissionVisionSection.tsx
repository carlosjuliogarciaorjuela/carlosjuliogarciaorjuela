"use client";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="text-center">
            <div className="text-3xl font-semibold text-yellow-500 mb-4">
              Misión
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              Nuestra razón de ser es dar respuesta a los requerimientos de
              servicios de mantenimiento, construcción y asesoría, de manera
              oportuna y eficiente para nuestros clientes, ofreciendo servicios
              de calidad, innovadores, seguros y respetuosos con el medio
              ambiente. A su vez, nuestra empresa se compromete a brindar
              capital humano la posibilidad de cumplir sus expectativas
              profesionales y de desarrollo personal y generar rentabilidad.
            </div>
          </div>

          {/* Visión */}
          <div className="text-center border-t md:border-t-0 md:border-l border-gray-300 md:pl-12 pt-6 md:pt-0">
            <div className="text-3xl font-semibold text-yellow-500 mb-4">
              Visión
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              Nuestra visión es ser la empresa líder en el mercado nacional,
              capaz de resolver necesidades de mantenimiento, construcción y
              asesoría, reconocida por ofrecer servicios que satisfacen
              íntegramente las expectativas de sus clientes, basándose en altos
              estándares de calidad, seguridad y cuidado del medio ambiente.
              Nuestra organización aspira a tener un crecimiento continuo y
              sustentable, destacándose por ser una empresa que contribuye
              positivamente a la sociedad.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
