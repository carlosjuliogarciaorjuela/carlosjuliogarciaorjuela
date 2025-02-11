"use client";
import Link from "next/link";

export default function CompanySection() {
  return (
    <section
      id="nuestra-empresa"
      className="w-full py-24 bg-white flex items-center justify-center"
    >
      <div className="max-w-5xl px-6 text-center">
        <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Nuestra Empresa
        </div>
        <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Bienvenido a <strong>K&J SOLUCIONES Y ASESORÍAS.</strong> Somos una
          empresa 100% Tolimense, dedicada a brindar soluciones en
          mantenimiento, instalación y mantenimientos industriales.
        </div>
        <div className="mt-10">
          <Link
            href="https://w.app/kyjsoluciones"
            className="bg-green-200 hover:bg-green-300 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
