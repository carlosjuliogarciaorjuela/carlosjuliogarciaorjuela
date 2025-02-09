import { MdThumbUp, MdVerified, MdPeople, MdLightbulb } from "react-icons/md";

export default function ValuesSection() {
  const values = [
    {
      title: "Satisfacción del Cliente",
      description: "Orientados a dar satisfacción a nuestros clientes.",
      icon: <MdThumbUp className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Excelencia",
      description: "Excelencia en la calidad del servicio.",
      icon: <MdLightbulb className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Integridad",
      description: "Actuamos con integridad en cada proyecto.",
      icon: <MdVerified className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Talento Humano",
      description: "Nuestro éxito se basa en nuestros recursos humanos.",
      icon: <MdPeople className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Clima Laboral",
      description: "Ambiente laboral, respetuoso y grato.",
      icon: <MdLightbulb className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Responsabilidad Ambiental",
      description: "Comprometidos con el desarrollo sustentable..",
      icon: <MdLightbulb className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Sinergia",
      description: "Trabajamos en equipo.",
      icon: <MdLightbulb className="text-yellow-500 text-5xl" />,
    },
    {
      title: "Innovación",
      description: "Buscamos la innovación para mejorar nuestros servicios.",
      icon: <MdLightbulb className="text-yellow-500 text-5xl" />,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Nuestros Valores
        </div>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {value.icon}
              <div className="text-2xl font-semibold text-yellow-500 mt-4">
                {value.title}
              </div>
              <p className="text-lg text-gray-700 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
