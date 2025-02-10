import Image from "next/image";

export default function MissionVisionSection() {
  return (
	  <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
		<div className="max-w-7xl mx-auto">
		  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
			{/* Tarjeta de Misión */}
			<div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
			  <div className="flex flex-col h-full">
				{/* Imagen - Siempre arriba */}
				<div className="relative w-full h-64 md:h-80">
				  <Image
					  src="/images/misionvisionsection/mision.svg"
					  alt="Nuestra misión"
					  fill
					  className="rounded-t-2xl object-cover"
					  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				  />
				</div>

				{/* Contenido - Siempre abajo */}
				<div className="p-8 md:p-10">
				  <h3 className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-6">
					Misión
				  </h3>
				  <p className="text-gray-600 leading-relaxed lg:text-lg">
					Nuestra razón de ser es dar respuesta a los requerimientos de
					servicios de mantenimiento, construcción y asesoría, de manera
					oportuna y eficiente para nuestros clientes, ofreciendo servicios
					de calidad, innovadores, seguros y respetuosos con el medio
					ambiente. A su vez, nuestra empresa se compromete a brindar
					capital humano la posibilidad de cumplir sus expectativas
					profesionales y de desarrollo personal y generar rentabilidad.
				  </p>
				</div>
			  </div>
			</div>

			{/* Tarjeta de Visión */}
			<div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
			  <div className="flex flex-col h-full">
				{/* Imagen - Siempre arriba */}
				<div className="relative w-full h-64 md:h-80">
				  <Image
					  src="/images/misionvisionsection/vision.svg"
					  alt="Nuestra visión"
					  fill
					  className="rounded-t-2xl object-cover"
					  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				  />
				</div>

				{/* Contenido - Siempre abajo */}
				<div className="p-8 md:p-10">
				  <h3 className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-6">
					Visión
				  </h3>
				  <p className="text-gray-600 leading-relaxed lg:text-lg">
					Nuestra visión es ser la empresa líder en el mercado nacional,
					capaz de resolver necesidades de mantenimiento, construcción y
					asesoría, reconocida por ofrecer servicios que satisfacen
					íntegramente las expectativas de sus clientes, basándose en altos
					estándares de calidad, seguridad y cuidado del medio ambiente.
					Nuestra organización aspira a tener un crecimiento continuo y
					sustentable, destacándose por ser una empresa que contribuye
					positivamente a la sociedad.
				  </p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
  );
}